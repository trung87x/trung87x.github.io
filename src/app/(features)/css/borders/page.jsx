"use client";

export default function Example() {
  return (
    <>
      <p className="normal">Normal border</p>
      <p className="round1">Round border</p>
      <p className="round2">Rounder border</p>
      <p className="round3">Roundest border</p>

      <style jsx>{`
        p.normal {
          border: 2px solid red;
          padding: 5px;
        }

        p.round1 {
          border: 2px solid red;
          border-radius: 5px;
          padding: 5px;
        }

        p.round2 {
          border: 2px solid red;
          border-radius: 8px;
          padding: 5px;
        }

        p.round3 {
          border: 2px solid red;
          border-radius: 12px;
          padding: 5px;
        }
      `}</style>
    </>
  );
}
