"use client";

import React, { useState } from "react";
import styles from "./index.module.css";

export default function Index({ index, title, setModal }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        setIsHovered(true);
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setModal({ active: false, index });
      }}
      className={styles.project}
    >
      <span className="flex items-center gap-8 w-100">
        <span>({index + 1})</span>
        <h2 style={{ maxWidth: "1000px" }}>{title}</h2>
      </span>
      <p className={`${styles.description} ${isHovered ? styles.show : ""}`}>
        Website như ngôi nhà của thương hiệu. Hãy để Dots cùng bạn tạo ra trải
        nghiệm số đầy cảm xúc bằng bữa tiệc của thị giác, ngôn từ và công nghệ
      </p>
    </div>
  );
}
