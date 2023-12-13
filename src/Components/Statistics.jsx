import GitHubCalendar from "react-github-calendar";
import "../Styles/Statistics.css";

export default function Statistics() {
  const selectLastYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 12;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

  return (
    <div id="statistics" className="main">
      <h1 className="heading">Statistics</h1>
      <hr className="line" />

      <div className="second">
        <GitHubCalendar
          style={{
            color: "white",
          }}
          username="neelmani0"
          transformData={selectLastYear}
        />
      </div>
      <br />
      
      <div className="statsPicBox">
        <img
          className="statsPic"
          src="https://github-readme-stats.vercel.app/api?username=neelmani0&show_icons=true&locale=en&theme=radical"
          alt="neel"
        />
        <img
          className="statsPic"
          src="https://github-readme-streak-stats.herokuapp.com/?user=neelmani0&theme=radical"
          alt="neel"
        />
      </div>
      <br />
    </div>
  );
}
