// FertilizerRecommendationApp.js
import React, { useState } from 'react';
import FertilizerRecommendationForm from './FertilizerRecommendationForm';
import { recommendFertilizer } from '../services/recommendFertilizer';


const FertilizerRecommendationApp = () => {
  const [recommendation, setRecommendation] = useState(null);

  const handleRecommendation = (userInput) => {
    const result = recommendFertilizer(userInput);
    setRecommendation(result);
  };

  return (
    <div>
      <FertilizerRecommendationForm onRecommendation={handleRecommendation} />

      {recommendation && (
        <div>
          <h2>Fertilizer Recommendation:</h2>
          <pre>{JSON.stringify(recommendation, null, 2)}</pre>
        </div>
      )}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default FertilizerRecommendationApp;
