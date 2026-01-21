"use client";

export default function Example() {
  return (
    <>
      <p className="a">
        This is a paragraph. Font size is 20 pixels and font family is Arial.
      </p>

      <p className="b">
        This is a paragraph. Font is italic, bold, font size is 16 pixels, and
        font family is Arial.
      </p>

      <p className="c">
        This is a paragraph. Font is italic, in small-caps and bold, the font
        size is 15 pixels, the line height is 30 pixels, and the font family is
        Georgia.
      </p>

      <style jsx>{`
        p.a {
          font:
            20px Arial,
            sans-serif;
        }

        p.b {
          font:
            italic bold 16px Arial,
            sans-serif;
        }

        p.c {
          font:
            italic small-caps bold 15px/30px Georgia,
            serif;
        }
      `}</style>
    </>
  );
}
