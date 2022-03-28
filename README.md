# ACFTCalc
*A calculator to calculate your Army ACFT scores for your upcoming diagnostic/record test.* 

**Live link:** https://wwww.acftcalc.com

<img width="497" alt="Screen Shot 2022-03-27 at 9 45 22 PM" src="https://user-images.githubusercontent.com/77505021/160504176-b13adb52-a5f3-4934-9c7c-ad490d78903e.png">

## Screenshots
<img width="540" alt="Screen Shot 2022-03-28 at 4 40 36 PM" src="https://user-images.githubusercontent.com/77505021/160504760-31502a38-99aa-4d2f-aace-d84eb4bfa3c3.png">


## Challenges
- The new US Army ACFT grading standards were released on 23 March 2022 and there was no existing APIs I can get data from
- It was a time crunch because the effective date for the new standards is April 2022 

## Process
### Day 1 (Create the API)
- As soon as they posted the grading scalesI converted the grading standards in PDF to an excel sheet. With the tools out there, I converted it to JSON and created a basic REST API.
### Day 2 (Connect the API to the front-end, Establish MVP)
- To lessen the load on the API, the app uses localStorage to save and access datasets. It only makes API calls when a new age/gender is selected. Any subsequent calls will first check to see if localStorage has the dataset.
### Day 3 (Design in Figma, Apply mobile styling, Testing)
- It was mobile-first because of the nature of the app. It was a grading tool on-the-go
### Day 4 (Apply desktop styling, Deployment)
- Very minimal changes in styling compared to mobile
- Deployed app at acftcalc.com
