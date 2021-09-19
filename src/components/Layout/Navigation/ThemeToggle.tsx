const ThemeToggle = () => {
  return (
    <label className="theme-toggle" htmlFor="theme-toggle">
      <input
        type="checkbox"
        className="theme-toggle__checkbox"
        name="theme-toggle"
        id="theme-toggle"
      />
      <div className="theme-toggle__ball" />
    </label>
  );
};

export default ThemeToggle;
