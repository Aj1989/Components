import classes from "./RowComponent.module.css";

function RowComponent() {
  return (
    <>
      <div className={classes.gridRowComponent}>
        <div className={classes.dateComponent}>
          <div className={classes.yearComponent}>2023</div>
          <div className={classes.monthComponent}>AUG</div>
          <div className={classes.dayComponent}>22</div>
        </div>
        <div className={classes.candidateName}>AJINKYA KHOPADE</div>
        <div className={classes.candidatePercentage}>98.40</div>
      </div>
    </>
  );
}

export default RowComponent;
