/**
 * Paderbowler Stats 2 - Gemeinsamer Statistik- & Datenkern für alle Prototypen
 * Berechnet Mannschafts-Statistiken, Vereins-Gesamtstatistiken und Awards
 */

var STORAGE_KEY = window.STORAGE_KEY || 'paderbowler_stats_hub_v1';
window.STORAGE_KEY = STORAGE_KEY;

// 1. Initialer Spieltags-Datenbestand (Pader-Bowler-06 2, Landesliga 1, Saison 2026/2027)
var initialPb2Matchdays = window.initialPb2Matchdays || {
  1: {
    number: 1, date: "2026-09-06", centerId: "center_elite",
    gameOpponents: {
      1: { id: "opp_hamm", pins: 674 },
      2: { id: "opp_detmold", pins: 709 },
      3: { id: "opp_holsen", pins: 742 },
      4: { id: "opp_bielefeld", pins: 676 },
      5: { id: "opp_brackwede", pins: 757 }
    },
    gameLineups: {
      1: ["player_klipenstein", "player_hatzig", "player_gerdhenrich", "player_baumeister"],
      2: ["player_klipenstein", "player_hatzig", "player_hoppe", "player_baumeister"],
      3: ["player_klipenstein", "player_hoppe", "player_gerdhenrich", "player_baumeister"],
      4: ["player_klipenstein", "player_hatzig", "player_hoppe", "player_baumeister"],
      5: ["player_klipenstein", "player_hatzig", "player_hoppe", "player_gerdhenrich"]
    },
    gamePlayerPins: {
      1: { player_klipenstein: 222, player_hatzig: 198, player_gerdhenrich: 169, player_baumeister: 174 },
      2: { player_klipenstein: 183, player_hatzig: 155, player_hoppe: 164, player_baumeister: 203 },
      3: { player_klipenstein: 181, player_hoppe: 141, player_gerdhenrich: 152, player_baumeister: 161 },
      4: { player_klipenstein: 227, player_hatzig: 246, player_hoppe: 163, player_baumeister: 157 },
      5: { player_klipenstein: 190, player_hatzig: 195, player_hoppe: 167, player_gerdhenrich: 182 }
    },
    matchdayTallies: {
      player_klipenstein: { bier: 0, miss: 6, gutter: 0, split: 2, open9: 2, turkey: 3 },
      player_hatzig: { bier: 1, miss: 2, gutter: 0, split: 1, open9: 0, turkey: 3 },
      player_hoppe: { bier: 1, miss: 5, gutter: 0, split: 0, open9: 1, turkey: 0 },
      player_gerdhenrich: { bier: 1, miss: 5, gutter: 0, split: 0, open9: 1, turkey: 1 },
      player_baumeister: { bier: 4, miss: 7, gutter: 0, split: 1, open9: 1, turkey: 0 },
      player_stoewer: { bier: 0, miss: 0, gutter: 0, split: 0, open9: 0, turkey: 0 }
    }
  },
  2: {
    number: 2, date: "2026-09-20", centerId: "center_elite",
    gameOpponents: {
      1: { id: "opp_detmold", pins: 583 },
      2: { id: "opp_hamm", pins: 644 },
      3: { id: "opp_bielefeld", pins: 571 },
      4: { id: "opp_brackwede", pins: 603 },
      5: { id: "opp_holsen", pins: 686 }
    },
    gameLineups: {
      1: ["player_hatzig", "player_hoppe", "player_baumeister", "player_stoewer"],
      2: ["player_klipenstein", "player_hatzig", "player_hoppe", "player_baumeister"],
      3: ["player_hatzig", "player_hoppe", "player_baumeister", "player_stoewer"],
      4: ["player_klipenstein", "player_hatzig", "player_hoppe", "player_baumeister"],
      5: ["player_klipenstein", "player_hoppe", "player_baumeister", "player_stoewer"]
    },
    gamePlayerPins: {
      1: { player_hatzig: 189, player_hoppe: 164, player_baumeister: 223, player_stoewer: 150 },
      2: { player_klipenstein: 134, player_hatzig: 169, player_hoppe: 207, player_baumeister: 192 },
      3: { player_hatzig: 179, player_hoppe: 192, player_baumeister: 218, player_stoewer: 141 },
      4: { player_klipenstein: 162, player_hatzig: 165, player_hoppe: 185, player_baumeister: 205 },
      5: { player_klipenstein: 156, player_hoppe: 148, player_baumeister: 158, player_stoewer: 156 }
    },
    matchdayTallies: {
      player_klipenstein: { bier: 5, miss: 5, gutter: 0, split: 2, open9: 2, turkey: 0 },
      player_hatzig: { bier: 0, miss: 5, gutter: 0, split: 2, open9: 2, turkey: 2 },
      player_hoppe: { bier: 0, miss: 5, gutter: 0, split: 2, open9: 3, turkey: 1 },
      player_gerdhenrich: { bier: 0, miss: 0, gutter: 0, split: 0, open9: 0, turkey: 0 },
      player_baumeister: { bier: 2, miss: 11, gutter: 0, split: 2, open9: 2, turkey: 3 },
      player_stoewer: { bier: 2, miss: 14, gutter: 2, split: 1, open9: 1, turkey: 0 }
    }
  },
  3: {
    number: 3, date: "2026-10-04", centerId: "center_muenster",
    gameOpponents: {
      1: { id: "opp_bielefeld", pins: 569 },
      2: { id: "opp_brackwede", pins: 620 },
      3: { id: "opp_hamm", pins: 541 },
      4: { id: "opp_holsen", pins: 574 },
      5: { id: "opp_detmold", pins: 616 }
    },
    gameLineups: {
      1: ["player_klipenstein", "player_hoppe", "player_gerdhenrich", "player_baumeister"],
      2: ["player_klipenstein", "player_hoppe", "player_gerdhenrich", "player_baumeister"],
      3: ["player_klipenstein", "player_gerdhenrich", "player_baumeister", "player_stoewer"],
      4: ["player_klipenstein", "player_hoppe", "player_baumeister", "player_stoewer"],
      5: ["player_klipenstein", "player_hoppe", "player_gerdhenrich", "player_stoewer"]
    },
    gamePlayerPins: {
      1: { player_klipenstein: 161, player_hoppe: 167, player_gerdhenrich: 172, player_baumeister: 181 },
      2: { player_klipenstein: 139, player_hoppe: 182, player_gerdhenrich: 186, player_baumeister: 171 },
      3: { player_klipenstein: 145, player_gerdhenrich: 177, player_baumeister: 171, player_stoewer: 139 },
      4: { player_klipenstein: 153, player_hoppe: 169, player_baumeister: 188, player_stoewer: 161 },
      5: { player_klipenstein: 157, player_hoppe: 168, player_gerdhenrich: 181, player_stoewer: 150 }
    },
    matchdayTallies: {
      player_klipenstein: { bier: 4, miss: 15, gutter: 2, split: 2, open9: 3, turkey: 1 },
      player_hatzig: { bier: 0, miss: 0, gutter: 0, split: 0, open9: 0, turkey: 0 },
      player_hoppe: { bier: 0, miss: 2, gutter: 0, split: 0, open9: 1, turkey: 1 },
      player_gerdhenrich: { bier: 0, miss: 8, gutter: 0, split: 2, open9: 0, turkey: 1 },
      player_baumeister: { bier: 2, miss: 11, gutter: 0, split: 0, open9: 0, turkey: 3 },
      player_stoewer: { bier: 2, miss: 14, gutter: 2, split: 1, open9: 1, turkey: 0 }
    }
  },
  4: {
    number: 4, date: "2026-10-18", centerId: "center_detmold",
    gameOpponents: {
      1: { id: "opp_holsen", pins: 699 },
      2: { id: "opp_detmold", pins: 651 },
      3: { id: "opp_brackwede", pins: 666 },
      4: { id: "opp_hamm", pins: 638 },
      5: { id: "opp_bielefeld", pins: 651 }
    },
    gameLineups: {
      1: ["player_klipenstein", "player_hatzig", "player_hoppe", "player_baumeister"],
      2: ["player_klipenstein", "player_hatzig", "player_hoppe", "player_baumeister"],
      3: ["player_klipenstein", "player_hatzig", "player_gerdhenrich", "player_baumeister"],
      4: ["player_klipenstein", "player_hatzig", "player_hoppe", "player_baumeister"],
      5: ["player_klipenstein", "player_hatzig", "player_hoppe", "player_baumeister"]
    },
    gamePlayerPins: {
      1: { player_klipenstein: 180, player_hatzig: 192, player_hoppe: 185, player_baumeister: 200 },
      2: { player_klipenstein: 196, player_hatzig: 201, player_hoppe: 158, player_baumeister: 256 },
      3: { player_klipenstein: 216, player_hatzig: 170, player_gerdhenrich: 139, player_baumeister: 195 },
      4: { player_klipenstein: 170, player_hatzig: 215, player_hoppe: 204, player_baumeister: 219 },
      5: { player_klipenstein: 176, player_hatzig: 203, player_hoppe: 216, player_baumeister: 190 }
    },
    matchdayTallies: {
      player_klipenstein: { bier: 4, miss: 5, gutter: 0, split: 3, open9: 1, turkey: 1 },
      player_hatzig: { bier: 2, miss: 3, gutter: 0, split: 1, open9: 0, turkey: 2 },
      player_hoppe: { bier: 1, miss: 3, gutter: 0, split: 1, open9: 2, turkey: 1 },
      player_gerdhenrich: { bier: 2, miss: 1, gutter: 0, split: 0, open9: 1, turkey: 0 },
      player_baumeister: { bier: 1, miss: 4, gutter: 0, split: 1, open9: 0, turkey: 7 },
      player_stoewer: { bier: 0, miss: 0, gutter: 0, split: 0, open9: 0, turkey: 0 }
    }
  },
  5: {
    number: 5, date: "2026-11-08", centerId: "center_hamm",
    gameOpponents: {
      1: { id: "opp_brackwede", pins: 681 },
      2: { id: "opp_bielefeld", pins: 637 },
      3: { id: "opp_holsen", pins: 724 },
      4: { id: "opp_detmold", pins: 722 },
      5: { id: "opp_hamm", pins: 634 }
    },
    gameLineups: {
      1: ["player_hatzig", "player_hoppe", "player_baumeister", "player_stoewer"],
      2: ["player_hatzig", "player_hoppe", "player_baumeister", "player_stoewer"],
      3: ["player_hatzig", "player_hoppe", "player_baumeister", "player_stoewer"],
      4: ["player_hatzig", "player_hoppe", "player_baumeister", "player_stoewer"],
      5: ["player_hatzig", "player_hoppe", "player_gerdhenrich", "player_baumeister"]
    },
    gamePlayerPins: {
      1: { player_hatzig: 178, player_hoppe: 180, player_baumeister: 171, player_stoewer: 228 },
      2: { player_hatzig: 213, player_hoppe: 173, player_baumeister: 211, player_stoewer: 196 },
      3: { player_hatzig: 176, player_hoppe: 154, player_baumeister: 181, player_stoewer: 210 },
      4: { player_hatzig: 202, player_hoppe: 157, player_baumeister: 183, player_stoewer: 128 },
      5: { player_hatzig: 248, player_hoppe: 149, player_gerdhenrich: 195, player_baumeister: 233 }
    },
    matchdayTallies: {
      player_klipenstein: { bier: 0, miss: 0, gutter: 0, split: 0, open9: 0, turkey: 0 },
      player_hatzig: { bier: 3, miss: 5, gutter: 0, split: 0, open9: 1, turkey: 2 },
      player_hoppe: { bier: 7, miss: 11, gutter: 0, split: 1, open9: 3, turkey: 1 },
      player_gerdhenrich: { bier: 0, miss: 2, gutter: 0, split: 0, open9: 0, turkey: 1 },
      player_baumeister: { bier: 3, miss: 4, gutter: 0, split: 1, open9: 1, turkey: 2 },
      player_stoewer: { bier: 3, miss: 7, gutter: 0, split: 0, open9: 1, turkey: 4 }
    }
  },
  6: {
    number: 6, date: "2027-02-14", centerId: "center_elite",
    gameOpponents: {
      1: { id: "opp_detmold", pins: 685 },
      2: { id: "opp_hamm", pins: 710 },
      3: { id: "opp_holsen", pins: 695 },
      4: { id: "opp_bielefeld", pins: 720 },
      5: { id: "opp_brackwede", pins: 700 }
    },
    gameLineups: {
      1: ["player_klipenstein", "player_hatzig", "player_baumeister", "player_hoppe"],
      2: ["player_klipenstein", "player_hatzig", "player_baumeister", "player_stoewer"],
      3: ["player_gerdhenrich", "player_hatzig", "player_baumeister", "player_hoppe"],
      4: ["player_klipenstein", "player_gerdhenrich", "player_baumeister", "player_hoppe"],
      5: ["player_klipenstein", "player_hatzig", "player_baumeister", "player_stoewer"]
    },
    gamePlayerPins: {
      1: { player_klipenstein: 195, player_hatzig: 204, player_baumeister: 178, player_hoppe: 168 },
      2: { player_klipenstein: 180, player_hatzig: 190, player_baumeister: 210, player_stoewer: 155 },
      3: { player_gerdhenrich: 170, player_hatzig: 195, player_baumeister: 185, player_hoppe: 160 },
      4: { player_klipenstein: 190, player_gerdhenrich: 165, player_baumeister: 200, player_hoppe: 175 },
      5: { player_klipenstein: 185, player_hatzig: 215, player_baumeister: 220, player_stoewer: 160 }
    },
    matchdayTallies: {
      player_klipenstein: { bier: 1, miss: 2, gutter: 0, split: 1, open9: 0, turkey: 1 },
      player_hatzig: { bier: 0, miss: 1, gutter: 0, split: 0, open9: 1, turkey: 2 },
      player_hoppe: { bier: 1, miss: 3, gutter: 0, split: 1, open9: 1, turkey: 0 },
      player_gerdhenrich: { bier: 0, miss: 1, gutter: 0, split: 0, open9: 0, turkey: 1 },
      player_baumeister: { bier: 2, miss: 1, gutter: 0, split: 0, open9: 0, turkey: 1 },
      player_stoewer: { bier: 0, miss: 2, gutter: 1, split: 1, open9: 0, turkey: 0 }
    }
  },
  7: { number: 7, date: "2027-03-07", centerId: "", gameOpponents: {}, gameLineups: {}, gamePlayerPins: {}, matchdayTallies: {} },
  8: { number: 8, date: "2027-04-11", centerId: "", gameOpponents: {}, gameLineups: {}, gamePlayerPins: {}, matchdayTallies: {} },
  9: { number: 9, date: "2027-05-02", centerId: "", gameOpponents: {}, gameLineups: {}, gamePlayerPins: {}, matchdayTallies: {} }
};

// 2. Standard-Ausgangszustand für den Hub
var defaultInitialAppState = window.defaultInitialAppState || {
  currentSeasonId: "season_2026_2027",
  seasons: [
    { id: "season_2026_2027", name: "2026/2027", isCurrent: true }
  ],
  centers: [
    { id: "center_elite", name: "Elite Bowling Center", city: "Bielefeld" },
    { id: "center_muenster", name: "Bowltreff Münster", city: "Münster" },
    { id: "center_detmold", name: "Skyline Bowling", city: "Detmold" },
    { id: "center_hamm", name: "Maxi Strike", city: "Hamm" },
    { id: "center_paderborn", name: "Pader Bowling", city: "Paderborn" }
  ],
  players: [
    { id: "player_hatzig", name: "Pascal Hatzig", nickname: "Kalle", email: "kalle@paderbowler.de" },
    { id: "player_baumeister", name: "Gerrit Baumeister", nickname: "", email: "gerrit@paderbowler.de" },
    { id: "player_klipenstein", name: "Andre Klipenstein", nickname: "Olaf", email: "olaf@paderbowler.de" },
    { id: "player_gerdhenrich", name: "Gary Gerdhenrich", nickname: "", email: "gary@paderbowler.de" },
    { id: "player_hoppe", name: "Joachim Hoppe", nickname: "Jo", email: "jo@paderbowler.de" },
    { id: "player_stoewer", name: "Marvin Stöwer", nickname: "", email: "marvin@paderbowler.de" }
  ],
  teams: [
    {
      id: "team_pb2",
      seasonId: "season_2026_2027",
      name: "Pader-Bowler-06 2",
      league: "Landesliga 1",
      playerIds: ["player_hatzig", "player_baumeister", "player_klipenstein", "player_gerdhenrich", "player_hoppe", "player_stoewer"],
      opponents: ["MaxiStrike Hamm 2", "BV Detmold 2", "VfL Holsen 3", "Bowlingfreunde Bielefeld 3", "BV Brackwede 3"],
      matchdaysCount: 5,
      totalPins: 18054,
      points: "38 : 12",
      average: 180.54
    },
    {
      id: "team_pb1",
      seasonId: "season_2026_2027",
      name: "Pader-Bowler-06 1",
      league: "Oberliga 1",
      playerIds: ["player_hatzig", "player_baumeister"],
      opponents: ["1. BC Duisburg", "BV Düsseldorf 1", "BC Tropics Köln", "Assindia Essen 1"],
      matchdaysCount: 0,
      totalPins: 0,
      points: "0 : 0",
      average: 0.0
    }
  ]
};

// Hilfsfunktion: Schnapszahl-Erkennung
function checkSchnapszahl(pins) {
  if (!pins || pins < 10) return false;
  const s = pins.toString();
  const c = s[0];
  for (let i = 1; i < s.length; i++) {
    if (s[i] !== c) return false;
  }
  return true;
}

// Hilfsfunktion: Datum formatieren
function formatDate(isoStr) {
  if (!isoStr) return '';
  const parts = isoStr.split('-');
  if (parts.length === 3) return `${parts[2]}.${parts[1]}.${parts[0]}`;
  return isoStr;
}

// Lädt den globalen App-Zustand aus localStorage
function getAppState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && Array.isArray(parsed.teams) && parsed.teams.length > 0) {
        if (!parsed.teams.some(t => t.id === 'team_pb1')) {
          parsed.teams.push({
            id: "team_pb1",
            seasonId: parsed.currentSeasonId || "season_2026_2027",
            name: "Pader-Bowler-06 1",
            league: "Oberliga 1",
            playerIds: ["player_hatzig", "player_baumeister"],
            opponents: ["1. BC Duisburg", "BV Düsseldorf 1", "BC Tropics Köln", "Assindia Essen 1"],
            matchdaysCount: 0,
            totalPins: 0,
            points: "0 : 0",
            average: 0.0
          });
          localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
        }
        return parsed;
      }
    }
  } catch (e) {
    console.error("Fehler beim Laden von appState", e);
  }
  const cloned = JSON.parse(JSON.stringify(defaultInitialAppState));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cloned));
  return cloned;
}

// Speichert den globalen App-Zustand in localStorage
function saveAppState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  if (typeof triggerCloudSync === 'function') {
    triggerCloudSync();
  }
}

// Lädt die Spieltage einer bestimmten Mannschaft
function getTeamMatchdays(teamId) {
  if (!teamId) return {};
  const teamKey = `paderbowler_matchdays_${teamId}`;
  try {
    const raw = localStorage.getItem(teamKey);
    if (teamId === 'team_pb2') {
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && Object.keys(parsed).length > 0) return parsed;
      }
      const cloned = JSON.parse(JSON.stringify(initialPb2Matchdays));
      localStorage.setItem(teamKey, JSON.stringify(cloned));
      return cloned;
    }
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error(`Fehler beim Laden von Spieltagen für ${teamId}`, e);
  }
  return {};
}

// Speichert die Spieltage einer Mannschaft und berechnet ihre Summen
function saveTeamMatchdays(teamId, matchdaysData) {
  const teamKey = `paderbowler_matchdays_${teamId}`;
  localStorage.setItem(teamKey, JSON.stringify(matchdaysData));

  const state = getAppState();
  const team = state.teams.find(t => t.id === teamId);
  if (!team) return;

  let totalPins = 0;
  let totalGamesCount = 0;
  let playedMatchdays = 0;
  let wins = 0;
  let draws = 0;
  let losses = 0;

  Object.values(matchdaysData).forEach(md => {
    let mdHasGames = false;
    for (let g = 1; g <= 5; g++) {
      const opp = md.gameOpponents?.[g] || { pins: 0 };
      const lineups = md.gameLineups?.[g] || [];
      let ourPins = 0;
      lineups.forEach(pId => {
        ourPins += md.gamePlayerPins?.[g]?.[pId] || 0;
      });

      if (ourPins > 0) {
        mdHasGames = true;
        totalPins += ourPins;
        totalGamesCount += lineups.length;
        if (opp.pins > 0) {
          if (ourPins > opp.pins) wins++;
          else if (ourPins === opp.pins) draws++;
          else losses++;
        }
      }
    }
    if (mdHasGames) playedMatchdays++;
  });

  const pointsWon = wins * 2 + draws;
  const pointsLost = losses * 2 + draws;
  const avg = totalGamesCount > 0 ? parseFloat((totalPins / totalGamesCount).toFixed(2)) : 0;

  team.matchdaysCount = playedMatchdays;
  team.totalPins = totalPins;
  team.points = `${pointsWon} : ${pointsLost}`;
  team.average = avg;

  saveAppState(state);
}

/**
 * 3. BERECHNUNG DER STATISTIKEN EINER BESTIMMTEN MANNSCHAFT
 * Zählt ausschließlich die Einsätze und Strichlisten für dieses spezifische Team.
 */
function calculatePlayerStatsForTeam(teamId, appState = null) {
  const state = appState || getAppState();
  const team = state.teams.find(t => t.id === teamId) || state.teams[0];
  if (!team) return [];

  const matchdays = getTeamMatchdays(team.id);

  // Kader dieser Mannschaft ermitteln (ausschließlich zugewiesene / angehakte Spieler)
  const activePlayers = state.players.filter(p => (team.playerIds || []).includes(p.id));

  return activePlayers.map(p => {
    let gamesPlayed = 0;
    let totalPins = 0;
    let highGame = 0;
    let lowGame = 999;
    let totalBierframes = 0;
    let totalRaeumfehler = 0;
    let totalGutterAnwurf = 0;
    let totalDrilling = 0;
    let totalSplitUnder50 = 0;
    let totalNinthFrameOpen = 0;
    let totalOver210 = 0;
    let totalUnder170 = 0;
    let totalSchnapszahl = 0;

    // Nur Spieltage dieser Mannschaft auswerten
    Object.values(matchdays).forEach(md => {
      // Pins aus Spielen 1 bis 5
      for (let g = 1; g <= 5; g++) {
        const lineup = md.gameLineups?.[g] || [];
        if (lineup.includes(p.id)) {
          const pins = md.gamePlayerPins?.[g]?.[p.id];
          if (pins && pins > 0) {
            gamesPlayed++;
            totalPins += pins;
            if (pins > highGame) highGame = pins;
            if (pins < lowGame) lowGame = pins;
            if (pins > 210) totalOver210++;
            if (pins < 170) totalUnder170++;
            if (checkSchnapszahl(pins)) totalSchnapszahl++;
          }
        }
      }

      // Strichlisten dieses Spieltags
      const tallies = md.matchdayTallies?.[p.id];
      if (tallies) {
        totalBierframes += tallies.bier || 0;
        totalRaeumfehler += tallies.miss || 0;
        totalGutterAnwurf += tallies.gutter || 0;
        totalDrilling += tallies.turkey || 0;
        totalSplitUnder50 += tallies.split || 0;
        totalNinthFrameOpen += tallies.open9 || 0;
      }
    });

    const average = gamesPlayed > 0 ? parseFloat((totalPins / gamesPlayed).toFixed(2)) : 0.0;

    return {
      id: p.id,
      name: p.name.replace(/\s*\(.*?\)/, '').trim(),
      nickname: p.nickname || '',
      displayName: p.name.replace(/\s*\(.*?\)/, '').trim(),
      teamId: team.id,
      teamName: team.name,
      teamsPlayed: [team.name],
      gamesPlayed,
      totalPins,
      average,
      highGame: highGame > 0 ? highGame : 0,
      lowGame: lowGame < 999 ? lowGame : 0,
      totalBierframes,
      totalRaeumfehler,
      totalGutterAnwurf,
      totalDrilling,
      totalSplitUnder50,
      totalNinthFrameOpen,
      totalOver210,
      totalUnder170,
      totalSchnapszahl
    };
  });
}

/**
 * 4. BERECHNUNG DER VEREINS-GESAMTSTATISTIK (ALLE MANNSCHAFTEN)
 * Aggregiert alle Einsätze und Strichlisten jedes Spielers aus allen Teams des Vereins.
 */
function calculateClubWidePlayerStats(seasonId = null, appState = null) {
  const state = appState || getAppState();
  const currentSeasonId = seasonId || state.currentSeasonId;
  const seasonTeams = state.teams.filter(t => !currentSeasonId || t.seasonId === currentSeasonId);

  // Lade Spieltage aller Teams
  const allTeamMatchdays = seasonTeams.map(t => ({
    team: t,
    matchdays: getTeamMatchdays(t.id)
  }));

  return state.players.map(p => {
    let gamesPlayed = 0;
    let totalPins = 0;
    let highGame = 0;
    let lowGame = 999;
    let totalBierframes = 0;
    let totalRaeumfehler = 0;
    let totalGutterAnwurf = 0;
    let totalDrilling = 0;
    let totalSplitUnder50 = 0;
    let totalNinthFrameOpen = 0;
    let totalOver210 = 0;
    let totalUnder170 = 0;
    let totalSchnapszahl = 0;
    const teamsPlayedSet = new Set();

    allTeamMatchdays.forEach(({ team, matchdays }) => {
      let playerPlayedInThisTeam = false;

      Object.values(matchdays).forEach(md => {
        for (let g = 1; g <= 5; g++) {
          const lineup = md.gameLineups?.[g] || [];
          if (lineup.includes(p.id)) {
            const pins = md.gamePlayerPins?.[g]?.[p.id];
            if (pins && pins > 0) {
              gamesPlayed++;
              totalPins += pins;
              playerPlayedInThisTeam = true;
              if (pins > highGame) highGame = pins;
              if (pins < lowGame) lowGame = pins;
              if (pins > 210) totalOver210++;
              if (pins < 170) totalUnder170++;
              if (checkSchnapszahl(pins)) totalSchnapszahl++;
            }
          }
        }

        const tallies = md.matchdayTallies?.[p.id];
        if (tallies) {
          totalBierframes += tallies.bier || 0;
          totalRaeumfehler += tallies.miss || 0;
          totalGutterAnwurf += tallies.gutter || 0;
          totalDrilling += tallies.turkey || 0;
          totalSplitUnder50 += tallies.split || 0;
          totalNinthFrameOpen += tallies.open9 || 0;
          if ((tallies.bier || tallies.miss || tallies.gutter || tallies.turkey) > 0) {
            playerPlayedInThisTeam = true;
          }
        }
      });

      if (playerPlayedInThisTeam) {
        teamsPlayedSet.add(team.name);
      }
    });

    // Falls noch keine Spiele, aber Spieler einem Team zugeordnet ist
    if (teamsPlayedSet.size === 0) {
      seasonTeams.forEach(t => {
        if ((t.playerIds || []).includes(p.id)) {
          teamsPlayedSet.add(t.name);
        }
      });
    }

    const average = gamesPlayed > 0 ? parseFloat((totalPins / gamesPlayed).toFixed(2)) : 0.0;

    return {
      id: p.id,
      name: p.name.replace(/\s*\(.*?\)/, '').trim(),
      nickname: p.nickname || '',
      displayName: p.name.replace(/\s*\(.*?\)/, '').trim(),
      teamId: "all",
      teamName: "Vereinsstatistik",
      teamsPlayed: Array.from(teamsPlayedSet),
      gamesPlayed,
      totalPins,
      average,
      highGame: highGame > 0 ? highGame : 0,
      lowGame: lowGame < 999 ? lowGame : 0,
      totalBierframes,
      totalRaeumfehler,
      totalGutterAnwurf,
      totalDrilling,
      totalSplitUnder50,
      totalNinthFrameOpen,
      totalOver210,
      totalUnder170,
      totalSchnapszahl
    };
  });
}

// =========================================================================
// 5. FIREBASE FIRESTORE ECHTZEIT-CLOUD-SYNCHRONISATION
// =========================================================================
var FIREBASE_CONFIG = window.FIREBASE_CONFIG || {
  apiKey: "AIzaSyDDKNBi3mfDMDja8dpqg4Vdhb18EmDPzWY",
  authDomain: "paderbowler.firebaseapp.com",
  projectId: "paderbowler",
  storageBucket: "paderbowler.firebasestorage.app",
  messagingSenderId: "1054848185434",
  appId: "1:1054848185434:web:213a1ebb73a3b9d6ded463",
  measurementId: "G-G4J3C6XGFB"
};

let cloudDb = null;
let isApplyingCloudUpdate = false;
let cloudSyncDebounceTimer = null;
let cloudStatus = 'init'; // 'init' | 'synced' | 'syncing' | 'offline' | 'error'
let cloudStatusMessage = '';

// Initialisiert Firebase und den Echtzeit-Listener
function initPaderbowlerCloudSync() {
  if (typeof firebase === 'undefined') {
    cloudStatus = 'offline';
    cloudStatusMessage = 'Lokal (Kein Firebase SDK)';
    updateCloudStatusUI();
    return;
  }

  try {
    if (!firebase.apps.length) {
      firebase.initializeApp(FIREBASE_CONFIG);
    }
    cloudDb = firebase.firestore();
  } catch (err) {
    console.warn("Firebase Init-Hinweis:", err);
    cloudStatus = 'offline';
    cloudStatusMessage = 'Lokal (Offline)';
    updateCloudStatusUI();
    return;
  }

  cloudStatus = 'syncing';
  cloudStatusMessage = 'Verbinde mit Cloud...';
  updateCloudStatusUI();

  // Echtzeit-Listener auf das zentrale Vereins-Dokument
  const docRef = cloudDb.collection('clubs').doc('paderbowler_stats');
  
  docRef.onSnapshot(doc => {
    if (doc.exists) {
      const data = doc.data();
      applyIncomingCloudData(data);
      cloudStatus = 'synced';
      cloudStatusMessage = 'Cloud synchronisiert';
      updateCloudStatusUI();
    } else {
      // Dokument existiert noch nicht in Firebase -> Initial hochladen!
      console.log("Initialisiere Cloud-Datenbank mit lokalem Datenbestand...");
      pushLocalDataToCloud(true);
    }
  }, err => {
    console.warn("Firestore Sync-Status:", err);
    cloudStatus = 'error';
    if (err.code === 'permission-denied') {
      cloudStatusMessage = 'Cloud: Testmodus in Firestore aktivieren';
    } else if (err.code === 'not-found') {
      cloudStatusMessage = 'Cloud: Firestore-Datenbank erstellen';
    } else {
      cloudStatusMessage = 'Lokal gespeichert (Cloud getrennt)';
    }
    updateCloudStatusUI();
  });
}

// Überträgt eintreffende Cloud-Daten in den lokalen Gerätespeicher
function applyIncomingCloudData(data) {
  if (!data || isApplyingCloudUpdate) return;
  isApplyingCloudUpdate = true;

  try {
    if (data.hub && Array.isArray(data.hub.teams) && data.hub.teams.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data.hub));
    }
    if (data.matchdays && typeof data.matchdays === 'object' && Object.keys(data.matchdays).length > 0) {
      Object.keys(data.matchdays).forEach(teamId => {
        if (data.matchdays[teamId] && Object.keys(data.matchdays[teamId]).length > 0) {
          localStorage.setItem(`paderbowler_matchdays_${teamId}`, JSON.stringify(data.matchdays[teamId]));
        }
      });
    }
    // Event an alle offenen Fenster senden
    window.dispatchEvent(new CustomEvent('paderbowler:cloud-sync', { detail: data }));
  } catch (e) {
    console.error("Fehler beim Verarbeiten von Cloud-Daten", e);
  } finally {
    setTimeout(() => { isApplyingCloudUpdate = false; }, 300);
  }
}

// Lädt den gesamten lokalen Datenbestand in die Cloud hoch (debounced)
function triggerCloudSync() {
  if (isApplyingCloudUpdate) return;
  if (cloudSyncDebounceTimer) clearTimeout(cloudSyncDebounceTimer);

  cloudStatus = 'syncing';
  cloudStatusMessage = 'Speichere in Cloud...';
  updateCloudStatusUI();

  cloudSyncDebounceTimer = setTimeout(() => {
    pushLocalDataToCloud(false);
  }, 600);
}

// Führt den tatsächlichen Schreibvorgang nach Firestore durch
function pushLocalDataToCloud(isInitial = false) {
  if (!cloudDb) return;
  
  try {
    const hubState = getAppState();
    const matchdaysObj = {};

    // Sammle alle Spieltage der bekannten Teams
    (hubState.teams || []).forEach(team => {
      matchdaysObj[team.id] = getTeamMatchdays(team.id);
    });

    const payload = {
      hub: hubState,
      matchdays: matchdaysObj,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      clientTimestamp: new Date().toISOString()
    };

    cloudDb.collection('clubs').doc('paderbowler_stats').set(payload, { merge: true })
      .then(() => {
        cloudStatus = 'synced';
        cloudStatusMessage = 'Cloud synchronisiert';
        updateCloudStatusUI();
      })
      .catch(err => {
        console.warn("Fehler beim Cloud-Upload:", err);
        cloudStatus = 'error';
        if (err.code === 'permission-denied') {
          cloudStatusMessage = 'Cloud: Testmodus in Firestore aktivieren';
        } else {
          cloudStatusMessage = 'Lokal gespeichert (Cloud getrennt)';
        }
        updateCloudStatusUI();
      });
  } catch (err) {
    console.error("pushLocalDataToCloud Exception:", err);
  }
}

// Aktualisiert den visuellen Status-Indikator im Header
function updateCloudStatusUI() {
  const container = document.getElementById('cloudSyncStatusPill');
  if (!container) return;

  let badgeHtml = '';
  if (cloudStatus === 'synced') {
    badgeHtml = `
      <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-800 border border-emerald-500/40 text-[11px] font-bold shadow-sm cursor-pointer" title="${cloudStatusMessage} - Klicke zum Aktualisieren" onclick="triggerCloudSync()">
        <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span>Cloud synchron</span>
      </div>
    `;
  } else if (cloudStatus === 'syncing') {
    badgeHtml = `
      <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/15 text-amber-800 border border-amber-500/40 text-[11px] font-bold shadow-sm">
        <span class="w-2 h-2 rounded-full bg-amber-500 animate-ping"></span>
        <span>Synchronisiere...</span>
      </div>
    `;
  } else if (cloudStatus === 'error') {
    badgeHtml = `
      <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-500/15 text-rose-800 border border-rose-500/40 text-[11px] font-bold shadow-sm cursor-pointer" title="${cloudStatusMessage} - Klicke zum Wiederholen" onclick="initPaderbowlerCloudSync()">
        <span class="w-2 h-2 rounded-full bg-rose-500"></span>
        <span>${cloudStatusMessage.includes('aktivieren') ? 'Cloud aktivieren' : 'Lokal (Offline)'}</span>
      </div>
    `;
  } else {
    badgeHtml = `
      <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-200 text-slate-700 border border-slate-300 text-[11px] font-bold shadow-sm">
        <span class="w-2 h-2 rounded-full bg-slate-400"></span>
        <span>Lokal</span>
      </div>
    `;
  }
  container.innerHTML = badgeHtml;
}

// Starte Cloud-Sync automatisch beim Laden
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', initPaderbowlerCloudSync);
  } else {
    initPaderbowlerCloudSync();
  }
}
