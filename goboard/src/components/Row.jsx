const Row = ({ rowIndex }) => {
    const isStarPoint = (row, col) => {
      const starPoints = [
        [3, 3], [3, 9], [9, 3], [9, 9]
      ];
      return starPoints.some(([r, c]) => r === row && c === col);
    };
  
    return (
      <div className="row">
        {Array.from({ length: 13 }, (_, i) => (
          <div key={i} className={isStarPoint(rowIndex, i) ? 'star-point' : ''}></div>
        ))}
      </div>
    );
  };
  
  export default Row;