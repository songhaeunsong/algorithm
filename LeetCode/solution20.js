// 2402. Meeting Rooms III

/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
const mostBooked = function (n, meetings) {
  const rooms = new Array(n).fill(0);
  const endTime = new Array(n).fill(0);

  meetings.sort((a, b) => a[0] - b[0]);

  let availableNumber = (start) => {
    for (let i = 0; i < n; i++) {
      if (endTime[i] <= start) {
        return i;
      }
    }
    return -1;
  };

  let maxBooked = 0;

  meetings.forEach(([start, end]) => {
    let roomNumber = availableNumber(start);
    let delay = 0;

    if (roomNumber === -1) {
      let minEnd = Math.min(...endTime);
      delay = minEnd - start;
      roomNumber = availableNumber(minEnd);
    }
    endTime[roomNumber] = end + delay;
    rooms[roomNumber]++;

    if (rooms[roomNumber] > maxBooked) {
      maxBooked = rooms[roomNumber];
    }
  });

  return rooms.indexOf(maxBooked);
};
