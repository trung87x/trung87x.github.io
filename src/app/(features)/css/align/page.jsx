"use client";

export default function Example() {
  return (
    <>
      <h3>Center Align Block Elements</h3>
      <div className="center">
        <p>I am centered!</p>
      </div>
      <style jsx>{`
        .center {
          margin: auto;
          width: 50%;
          border: 3px solid #73ad21;
          padding: 10px;
        }
      `}</style>

      <h3>Center Align Text</h3>
      <p>This text is centered.</p>
      <style jsx>{`
        p {
          text-align: center;
        }
      `}</style>

      <h3>Center Align an Image</h3>
      <img
        src="https://www.w3schools.com/css/paris.jpg"
        alt="Paris"
        style={{ width: "40%" }}
      ></img>
      <style jsx>{`
        img {
          display: block;
          margin-left: auto;
          margin-right: auto;
        }
      `}</style>

      <h3>Center Align with Flexbox</h3>
      <div className="center">
        <p>I am vertically and horizontally centered.</p>
      </div>
      <style jsx>{`
        .center {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 200px;
          border: 3px solid green;
        }
      `}</style>

      <h3>Center Align with Grid</h3>
      <div class="centerGrid">
        <p>I am vertically and horizontally centered.</p>
      </div>
      <style jsx>{`
        .centerGrid {
          display: grid;
          place-items: center;
          height: 200px;
          border: 3px solid green;
        }
      `}</style>

      <h3>Left and Right Align - Using position</h3>
      <div className="rightPosition">
        <p>
          In my younger and more vulnerable years my father gave me some advice
          that I've been turning over in my mind ever since.
        </p>
      </div>
      <style jsx>{`
        .rightPosition {
          position: absolute;
          right: 0px;
          width: 300px;
          border: 3px solid green;
          padding: 10px;
        }
      `}</style>

      <h3>Left and Right Align - Using float</h3>
      <div className="rightFloat">
        <p>
          In my younger and more vulnerable years my father gave me some advice
          that I've been turning over in my mind ever since.
        </p>
      </div>
      <style jsx>{`
        .rightFloat {
          float: right;
          width: 300px;
          border: 3px solid green;
          padding: 10px;
        }
      `}</style>

      <h3>Center Align with position and transform</h3>
      <div className="container">
        <p>I am vertically and horizontally centered.</p>
      </div>
      <style jsx>{`
        .container {
          height: 200px;
          position: relative;
          border: 3px solid green;
        }

        .container p {
          margin: 0;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      `}</style>
    </>
  );
}
