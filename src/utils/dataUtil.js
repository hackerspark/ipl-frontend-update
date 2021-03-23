const SERVER_ROOT = 'http://localhost:4000';

export async function getPlayers() {
  let res = await fetch(`${SERVER_ROOT}/players`);
  return await res.json();
}

export async function getPlayer(id) {
  let players = await this.getPlayers();
  return players.find((player) => player.id === id);
}

export async function getTeams() {
  let res = await fetch(`${SERVER_ROOT}/teams`);
  return await res.json();
}

export async function isBiddingOn() {
  let res = await fetch(`${SERVER_ROOT}/isBiddingOn`);
  return (await res.json()).status;
}
