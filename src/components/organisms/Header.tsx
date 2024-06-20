import { useCallback, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  // TODO: change check value of checkbox to false when the backdrop button is clicked
  const [checked, setChecked] = useState(false);
  const handleClickBackdrop = useCallback(() => {
    setChecked(false);
  }, []);
  const handleCheckboxChange = useCallback(() => {
    setChecked((pre) => !pre);
  }, []);
  return (
    <header className="bg-background sticky top-0 z-10 flex flex-row items-center justify-center p-4 text-center">
      <h3 className="font-jula flex-1 text-xl">지명 만세력</h3>
      <input
        type="checkbox"
        className="hidden"
        id="menu-toggle"
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="menu-toggle" className="menu-btn-container">
        <div className="menu-btn"></div>
      </label>
      <nav className="nav-container max-w-80">
        <Link to="/" className="nav-link">
          홈
        </Link>
        <Link to="/" className="nav-link">
          저장한 만세력
        </Link>
        <Link to="/profile" className="nav-link">
          프로필 입력
        </Link>
        <Link to="/" className="nav-link">
          고객센터
        </Link>
      </nav>
      <div className="backdrop" onClick={handleClickBackdrop}></div>
    </header>
  );
}
