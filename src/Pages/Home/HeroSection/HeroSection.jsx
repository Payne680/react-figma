import React from "react";
import HeroSectionStyles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <div className={HeroSectionStyles.heroSection}>
      <h1>Experience the beauty of Rwanda with us</h1>
      <p>Discover the Land of a Thousand Hills</p>
      <div className={HeroSectionStyles.arrows}>
        <span class="material-symbols-outlined">arrow_back_ios</span>
        <span class="material-symbols-outlined">arrow_forward_ios</span>
      </div>
    </div>
  );
}