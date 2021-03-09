export default function getBoardPosition(
  targetPlayerId: string,
  myId: string | undefined,
  playerIds: string[]
): string {
  const positions = ['bottom', 'left', 'top', 'right'];
  if (
    myId === undefined ||
    !playerIds.includes(targetPlayerId) ||
    !playerIds.includes(myId)
  )
    return 'not found';
  return positions[
    (playerIds.indexOf(myId) -
      playerIds.indexOf(targetPlayerId) +
      playerIds.length) %
      playerIds.length
  ];
}
