export function Flag({ code, className }) {
  // Flagpack sử dụng các mã quốc gia như VN, US, CA...
  // Component này sẽ trả về thẻ img hoặc svg tương ứng
  return (
    <img
      src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${code}.svg`}
      className={className}
      alt={code}
    />
  );
}
