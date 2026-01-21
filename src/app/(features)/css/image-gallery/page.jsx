"use client";
export default function Example() {
  return (
    <>
      <div className="gallery">
        <div className="gallery-item">
          <a
            target="_blank"
            href="https://www.w3schools.com/css/img_5terre.jpg"
          >
            <img
              src="https://www.w3schools.com/css/img_5terre.jpg"
              alt="Cinque Terre"
              width="600"
              height="400"
            />
          </a>
          <div className="desc">Cinque Terre</div>
        </div>
        <div className="gallery-item">
          <a
            target="_blank"
            href="https://www.w3schools.com/css/img_forest.jpg"
          >
            <img
              src="https://www.w3schools.com/css/img_forest.jpg"
              alt="Forest"
              width="600"
              height="400"
            />
          </a>
          <div className="desc">Green Forest</div>
        </div>

        <div className="gallery-item">
          <a
            target="_blank"
            href="https://www.w3schools.com/css/img_lights.jpg"
          >
            <img
              src="https://www.w3schools.com/css/img_lights.jpg"
              alt="Northern Lights"
              width="600"
              height="400"
            />
          </a>
          <div className="desc">Northern Lights</div>
        </div>

        <div className="gallery-item">
          <a
            target="_blank"
            href="https://www.w3schools.com/css/img_mountains.jpg"
          >
            <img
              src="https://www.w3schools.com/css/img_mountains.jpg"
              alt="Mountains"
              width="600"
              height="400"
            />
          </a>
          <div className="desc">Mountains</div>
        </div>
      </div>
      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        div.gallery {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
        }

        div.gallery-item {
          margin: 5px;
          border: 1px solid #ccc;
          width: calc(25% - 20px);
        }

        div.gallery-item:hover {
          border: 1px solid #777;
        }

        div.gallery-item img {
          width: 100%;
          height: auto;
        }

        div.gallery-item div.desc {
          padding: 15px;
          text-align: center;
        }

        @media only screen and (max-width: 768px) {
          div.gallery-item {
            width: calc(50% - 20px);
          }
        }

        @media only screen and (max-width: 480px) {
          div.gallery-item {
            width: calc(100% - 20px);
          }
        }
      `}</style>
    </>
  );
}
