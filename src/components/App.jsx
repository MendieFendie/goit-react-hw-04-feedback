/* eslint-disable no-undef */
import { React } from "react";
import { useState } from "react";
import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Notification from "./Notification/Notification";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function countTotalFeedback() {
    const result = good + neutral + bad;
    return result;
  }

  function countPositiveFeedbackPercentage() {
    const result = countTotalFeedback();
    const percentage = (good * 100) / result;
    if (isNaN(percentage)) {
      return 0;
    } else return Math.round(percentage);
  }

  function onLeaveFeedback(e) {
    const name = e.target.name;
    switch (name) {
      case "good":
        setGood(good + 1);
        break;

      case "neutral":
        setNeutral(neutral + 1);
        break;

      case "bad":
        setBad(bad + 1);
        break;

      default:
        return;
    }
  }

  const objKey = ["good", "neutral", "bad"];
  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={objKey} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      {total === 0 ? (
        <Notification message="No feedback given" />
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      )}
    </>
  );
}
