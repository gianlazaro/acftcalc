import styled from "styled-components";
import RadioButton from "./RadioButton";
import React from "react";
import axios from "axios";
import Slider from "./Slider";
import Helmet from "react-helmet";

function Calculator() {
  const [data, setData] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);
  const [age, setAge] = React.useState(21);
  const [sex, setSex] = React.useState("M");
  const [grade, setGrade] = React.useState(0);

  React.useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://acft-api.herokuapp.com/ranges/${age}/${sex}`
      );
      let ranges = [];
      for (let key in data) {
        ranges.push(data[key].reverse());
      }
      setData(ranges);
      setIsLoading(false);
    };
    fetchData();
  }, [age, sex]);

  function sumArr(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += Number(arr[i]);
    }
    return Number(sum);
  }

  function handleChange(e) {
    setAge(e.target.value);
  }
  return (
    <>
      <Helmet>
        <title>ACFT Calculator (2022) - ACFTCalc.com</title>
        <meta name="title" content="ACFT Calculator (2022) - ACFTCALC.COM" />
        <meta
          name="description"
          content="Calculate your score on the ACFT with this nifty tool!"
        />
      </Helmet>
      <AgeWrapper>
        Age:
        <RadioButton
          handler={handleChange}
          name="ageGroup"
          value={21}
          label="17-21"
          checked={true}
        />
        <RadioButton
          handler={handleChange}
          name="ageGroup"
          value={26}
          label="22-26"
        />
        <RadioButton
          handler={handleChange}
          name="ageGroup"
          value={31}
          label="27-31"
        />
        <RadioButton
          handler={handleChange}
          name="ageGroup"
          value={36}
          label="32-36"
        />
        <RadioButton
          handler={handleChange}
          name="ageGroup"
          value={41}
          label="37-41"
        />
        <RadioButton
          handler={handleChange}
          name="ageGroup"
          value={46}
          label="42-46"
        />
        <RadioButton
          handler={handleChange}
          name="ageGroup"
          value={51}
          label="47-51"
        />
        <RadioButton
          handler={handleChange}
          name="ageGroup"
          value={56}
          label="52-56"
        />
        <RadioButton
          handler={handleChange}
          name="ageGroup"
          value={61}
          label="57-61"
        />
        <RadioButton
          handler={handleChange}
          name="ageGroup"
          value={66}
          label="62-up"
        />
      </AgeWrapper>
      <GenderWrapper>
        Sex:
        <input
          type="radio"
          value="M"
          checked={sex === "M"}
          name="sex"
          id="male"
          onChange={(e) => setSex(e.target.value)}
        />
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          value="F"
          checked={sex === "F"}
          name="sex"
          id="female"
          onChange={(e) => setSex(e.target.value)}
        />
        <label htmlFor="female">Female</label>
      </GenderWrapper>
      <ExerciseWrapper>
        {isLoading ? (
          "Loading..."
        ) : (
          <Slider
            data={data[0]}
            exercise="mdl"
            grade={grade}
            setGrade={setGrade}
            age={age}
            sex={sex}
            unit="LBS"
          />
        )}
      </ExerciseWrapper>
      <ExerciseWrapper>
        {isLoading ? (
          "Loading..."
        ) : (
          <Slider
            data={data[1]}
            exercise="spt"
            grade={grade}
            setGrade={setGrade}
            age={age}
            sex={sex}
            unit="M"
          />
        )}
      </ExerciseWrapper>
      <ExerciseWrapper>
        {isLoading ? (
          "Loading..."
        ) : (
          <Slider
            data={data[2]}
            exercise="hrp"
            grade={grade}
            setGrade={setGrade}
            age={age}
            sex={sex}
            unit="REPS"
          />
        )}
      </ExerciseWrapper>
      <ExerciseWrapper>
        {isLoading ? (
          "Loading..."
        ) : (
          <Slider
            data={data[3]}
            exercise="sdc"
            grade={grade}
            setGrade={setGrade}
            age={age}
            sex={sex}
            unit="MINS"
          />
        )}
      </ExerciseWrapper>
      <ExerciseWrapper>
        {isLoading ? (
          "Loading..."
        ) : (
          <Slider
            data={data[4]}
            exercise="plk"
            grade={grade}
            setGrade={setGrade}
            age={age}
            sex={sex}
            unit="MINS"
          />
        )}
      </ExerciseWrapper>
      <ExerciseWrapper>
        {isLoading ? (
          "Loading..."
        ) : (
          <Slider
            data={data[5]}
            exercise="2mr"
            grade={grade}
            setGrade={setGrade}
            age={age}
            sex={sex}
            unit="MINS"
          />
        )}
      </ExerciseWrapper>
      <ScoreWrapper>
        <span>Score</span>
        {sumArr(Object.values(grade))}
      </ScoreWrapper>
    </>
  );
}

const ExerciseWrapper = styled.article`
  border-radius: 5px;
  padding: 10px 0px;
  margin: 5px;
  color: var(--text-color);
`;

const AgeWrapper = styled.div`
  & label {
    display: flex;
    align-items: center;
    font-size: 1.25rem;
    -webkit-tap-highlight-color: transparent;
    background: #111;
    background-repeat: no-repeat;
    color: var(--text-color);
    font-weight: 800;
    min-width: 80px;
    height: 80px;
    text-align: center;
    padding: 25px;
    margin: 5px;
    border-radius: 5px;
  }
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow-x: scroll;
  height: 120px;
  overflow-y: hidden;
  @media (min-width: 1024px) {
    overflow: hidden;
    & label:hover {
      background-color: #333;
    }
  }
`;

const GenderWrapper = styled.div`
  display: flex;
  margin-top: 0px;
  flex-direction: row;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;

  & label {
    display: flex;
    align-items: center;
    font-size: 1.25rem;
    -webkit-tap-highlight-color: transparent;
    background: #111;
    background-repeat: no-repeat;
    color: var(--text-color);
    font-weight: 800;
    min-width: 80px;
    height: 80px;
    text-align: center;
    padding: 25px;
    margin: 5px;
    transition: border 0.2s ease-in-out;
    border-radius: 5px;
  }
  @media (min-width: 1024px) {
    & label:hover {
      background-color: #333;
    }
  }
`;
const ScoreWrapper = styled.div`
  & span {
    color: #ccc;
    font-size: 20px;
    border-bottom: 1px solid #333;
    padding-bottom: 5px;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  height: 200px;
  background: #111;
  font-weight: 800;
  border-radius: 5px;
  margin-bottom: 25px;
  margin-top: 25px;
`;

export default Calculator;
