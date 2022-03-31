import axios from "axios";
import React from "react";
import styled from "styled-components";

function Slider({ data, grade, setGrade, age, exercise, sex, unit }) {
  const [value, setValue] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);
  const [exerciseData, setExerciseData] = React.useState([]);

  React.useEffect(() => {
    setValue(0);
    setGrade({});
    if (localStorage.getItem(`${sex}${age}_${exercise}`) !== null) {
      setExerciseData(
        JSON.parse(localStorage.getItem(`${sex}${age}_${exercise}`))
      );
    } else {
      const fetchData = async () => {
        const info = await axios.get(
          `https://acft-api.herokuapp.com/${exercise}/${age}/${sex}`
        );

        let databaseData = info.data.reverse();
        localStorage.setItem(
          `${sex}${age}_${exercise}`,
          JSON.stringify(databaseData)
        );
        setExerciseData(info.data);
      };
      fetchData();
    }

    setIsLoading(false);
  }, [age, sex]);

  function handleChange(e) {
    setValue(e.target.value);
    setGrade({
      ...grade,
      [exercise]: exerciseData[e.target.value][1],
    });
  }

  return (
    <Wrapper>
      <LabelWrapper>
        <h3>{exercise.toUpperCase()}</h3>
        <label
          htmlFor="slider"
          style={grade[exercise] >= 60 ? { color: "green" } : { color: "red" }}
        >
          <PointsWrapper>
            {grade[exercise] ? `${grade[exercise]} pts - ` : "0 pts - "}{" "}
          </PointsWrapper>
          {data[value]} {unit}
        </label>
      </LabelWrapper>
      <input
        id="slider"
        type="range"
        min={0}
        max={data.length - 1}
        step={1}
        value={value}
        onChange={handleChange}
        disabled={isLoading}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 800;
  font-size: 18px;
`;

const PointsWrapper = styled.span`
  color: #555;
`;

export default Slider;
