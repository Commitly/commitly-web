import React, { useState } from "react";

const Modal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div >
      <div>
        <h2>모달 제목</h2>
        <p>이것은 모달 내용입니다.</p>
        <button onClick={onClose}>닫기</button>
      </div>
    </div>
  );
};