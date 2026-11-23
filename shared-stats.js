/**
 * Paderbowler Stats 2 - Gemeinsamer Statistik- & Datenkern für alle Prototypen
 * Berechnet Mannschafts-Statistiken, Vereins-Gesamtstatistiken und Awards
 */

var STORAGE_KEY = window.STORAGE_KEY || 'paderbowler_stats_hub_v1';
window.STORAGE_KEY = STORAGE_KEY;

// 1. Initialer Spieltags-Datenbestand (Pader-Bowler-06 2, Landesliga 1, Saison 2026/2027)
var initialPb2Matchdays = window.initialPb2Matchdays || {
  1: {
    number: 1, date: "2026-09-06", centerId: "center_elite", isLocked: true,
    gameOpponents: {
      1: { id: "MaxiStrike Hamm 2", name: "MaxiStrike Hamm 2", pins: 674 },
      2: { id: "BV Detmold 2", name: "BV Detmold 2", pins: 709 },
      3: { id: "VfL Holsen 3", name: "VfL Holsen 3", pins: 742 },
      4: { id: "Bowlingfreunde Bielefeld 3", name: "Bowlingfreunde Bielefeld 3", pins: 676 },
      5: { id: "BV Brackwede 3", name: "BV Brackwede 3", pins: 757 }
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
    number: 2, date: "2026-09-20", centerId: "center_elite", isLocked: true,
    gameOpponents: {
      1: { id: "BV Detmold 2", name: "BV Detmold 2", pins: 583 },
      2: { id: "MaxiStrike Hamm 2", name: "MaxiStrike Hamm 2", pins: 644 },
      3: { id: "Bowlingfreunde Bielefeld 3", name: "Bowlingfreunde Bielefeld 3", pins: 571 },
      4: { id: "BV Brackwede 3", name: "BV Brackwede 3", pins: 603 },
      5: { id: "VfL Holsen 3", name: "VfL Holsen 3", pins: 686 }
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
      player_hoppe: { bier: 0, miss: 7, gutter: 0, split: 1, open9: 2, turkey: 1 },
      player_gerdhenrich: { bier: 0, miss: 0, gutter: 0, split: 0, open9: 0, turkey: 0 },
      player_baumeister: { bier: 0, miss: 9, gutter: 0, split: 1, open9: 0, turkey: 4 },
      player_stoewer: { bier: 3, miss: 9, gutter: 1, split: 3, open9: 0, turkey: 0 }
    }
  },
  3: {
    number: 3, date: "2026-10-04", centerId: "center_muenster", isLocked: true,
    gameOpponents: {
      1: { id: "Bowlingfreunde Bielefeld 3", name: "Bowlingfreunde Bielefeld 3", pins: 560 },
      2: { id: "BV Detmold 2", name: "BV Detmold 2", pins: 589 },
      3: { id: "MaxiStrike Hamm 2", name: "MaxiStrike Hamm 2", pins: 570 },
      4: { id: "BV Brackwede 3", name: "BV Brackwede 3", pins: 579 },
      5: { id: "VfL Holsen 3", name: "VfL Holsen 3", pins: 622 }
    },
    gameLineups: {
      1: ["player_klipenstein", "player_gerdhenrich", "player_baumeister", "player_stoewer"],
      2: ["player_klipenstein", "player_gerdhenrich", "player_baumeister", "player_stoewer"],
      3: ["player_klipenstein", "player_gerdhenrich", "player_baumeister", "player_stoewer"],
      4: ["player_klipenstein", "player_gerdhenrich", "player_baumeister", "player_stoewer"],
      5: ["player_klipenstein", "player_gerdhenrich", "player_baumeister", "player_stoewer"]
    },
    gamePlayerPins: {
      1: { player_klipenstein: 128, player_gerdhenrich: 221, player_baumeister: 116, player_stoewer: 207 },
      2: { player_klipenstein: 140, player_gerdhenrich: 205, player_baumeister: 166, player_stoewer: 136 },
      3: { player_klipenstein: 153, player_gerdhenrich: 166, player_baumeister: 222, player_stoewer: 107 },
      4: { player_klipenstein: 150, player_gerdhenrich: 182, player_baumeister: 204, player_stoewer: 142 },
      5: { player_klipenstein: 184, player_gerdhenrich: 121, player_baumeister: 176, player_stoewer: 158 }
    },
    matchdayTallies: {
      player_klipenstein: { bier: 4, miss: 15, gutter: 2, split: 1, open9: 3, turkey: 1 },
      player_hatzig: { bier: 0, miss: 0, gutter: 0, split: 0, open9: 0, turkey: 0 },
      player_hoppe: { bier: 0, miss: 0, gutter: 0, split: 0, open9: 0, turkey: 0 },
      player_gerdhenrich: { bier: 0, miss: 8, gutter: 0, split: 2, open9: 0, turkey: 2 },
      player_baumeister: { bier: 4, miss: 10, gutter: 1, split: 1, open9: 1, turkey: 2 },
      player_stoewer: { bier: 1, miss: 19, gutter: 4, split: 1, open9: 2, turkey: 1 }
    }
  },
  4: {
    number: 4, date: "2026-10-18", centerId: "center_detmold", isLocked: true,
    gameOpponents: {
      1: { id: "VfL Holsen 3", name: "VfL Holsen 3", pins: 641 },
      2: { id: "BV Brackwede 3", name: "BV Brackwede 3", pins: 595 },
      3: { id: "Bowlingfreunde Bielefeld 3", name: "Bowlingfreunde Bielefeld 3", pins: 701 },
      4: { id: "MaxiStrike Hamm 2", name: "MaxiStrike Hamm 2", pins: 689 },
      5: { id: "BV Detmold 2", name: "BV Detmold 2", pins: 679 }
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
    number: 5, date: "2026-11-08", centerId: "center_hamm", isLocked: true,
    gameOpponents: {
      1: { id: "BV Brackwede 3", name: "BV Brackwede 3", pins: 681 },
      2: { id: "Bowlingfreunde Bielefeld 3", name: "Bowlingfreunde Bielefeld 3", pins: 637 },
      3: { id: "VfL Holsen 3", name: "VfL Holsen 3", pins: 724 },
      4: { id: "BV Detmold 2", name: "BV Detmold 2", pins: 722 },
      5: { id: "MaxiStrike Hamm 2", name: "MaxiStrike Hamm 2", pins: 634 }
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
  6: { number: 6, date: "2027-02-14", centerId: "center_elite", isLocked: true, gameOpponents: {}, gameLineups: {}, gamePlayerPins: {}, matchdayTallies: {} },
  7: { number: 7, date: "2027-03-07", centerId: "", isLocked: true, gameOpponents: {}, gameLineups: {}, gamePlayerPins: {}, matchdayTallies: {} },
  8: { number: 8, date: "2027-04-11", centerId: "", isLocked: true, gameOpponents: {}, gameLineups: {}, gamePlayerPins: {}, matchdayTallies: {} },
  9: { number: 9, date: "2027-05-02", centerId: "", isLocked: true, gameOpponents: {}, gameLineups: {}, gamePlayerPins: {}, matchdayTallies: {} }
};
window.initialPb2Matchdays = initialPb2Matchdays;

// Zufallsgenerator für 5-stellige Spielerpasswörter (z. B. 48291)
function generate5DigitPassword() {
  return String(Math.floor(10000 + Math.random() * 90000));
}
window.generate5DigitPassword = generate5DigitPassword;

// 2. Offizieller WBU-Mitgliederbestand des Vereins (Pader-Bowler-2006 e.V., Saison 2026/2027)
// Jedem Mitglied ist ein festes, individuelles 5-stelliges Zufallspasswort für das Trainingscenter zugeordnet
var CLUB_MEMBERS_WBU = [
  { id: "player_ploewka", name: "Pascal Ploewka", nickname: "", email: "", password: "48291", trainingPassword: "48291", edv: "21452" },
  { id: "player_baumeister", name: "Gerrit Baumeister", nickname: "", email: "", password: "71642", trainingPassword: "71642", edv: "24743" },
  { id: "player_hatzig", name: "Pascal Hatzig", nickname: "Kalle", email: "", password: "35918", trainingPassword: "35918", edv: "36536" },
  { id: "player_poguntke", name: "Andre Poguntke", nickname: "", email: "", password: "82405", trainingPassword: "82405", edv: "40969" },
  { id: "player_mueller", name: "Andrè Müller", nickname: "", email: "", password: "60371", trainingPassword: "60371", edv: "24454" },
  { id: "player_pfaffenrot", name: "Waldemar Pfaffenrot", nickname: "", email: "", password: "91834", trainingPassword: "91834", edv: "40967" },
  { id: "player_gerdhenrich", name: "Gary Gerdhenrich", nickname: "", email: "", password: "27490", trainingPassword: "27490", edv: "36514" },
  { id: "player_mandel", name: "Dennis Mandel", nickname: "", email: "", password: "53816", trainingPassword: "53816", edv: "40488" },
  { id: "player_klipenstein", name: "Andre Klipenstein", nickname: "Olaf", email: "", password: "19643", trainingPassword: "19643", edv: "40966" },
  { id: "player_hoppe", name: "Joachim Hoppe", nickname: "Jo", email: "", password: "74028", trainingPassword: "74028", edv: "36535" },
  { id: "player_kaeune", name: "Rüdiger Käune", nickname: "", email: "", password: "86215", trainingPassword: "86215", edv: "24752" },
  { id: "player_d_hoffmann", name: "Dustin Hoffmann", nickname: "", email: "", password: "32974", trainingPassword: "32974", edv: "40300" },
  { id: "player_nowatzky", name: "Nils Nowatzky", nickname: "", email: "", password: "64180", trainingPassword: "64180", edv: "40301" },
  { id: "player_dreier", name: "Marek Dreier", nickname: "", email: "", password: "90527", trainingPassword: "90527", edv: "40370" },
  { id: "player_burshile", name: "Dirk Burshile", nickname: "", email: "", password: "41783", trainingPassword: "41783", edv: "40428" },
  { id: "player_stoewer", name: "Marvin Stöwer", nickname: "", email: "", password: "58209", trainingPassword: "58209", edv: "40487" },
  { id: "player_engemann", name: "Peter Engemann", nickname: "", email: "", password: "23671", trainingPassword: "23671", edv: "20259" },
  { id: "player_seifert", name: "Sven Seifert", nickname: "", email: "", password: "87413", trainingPassword: "87413", edv: "40302" },
  { id: "player_vogt", name: "Lucas Vogt", nickname: "", email: "", password: "15948", trainingPassword: "15948", edv: "40516" },
  { id: "player_m_hoffmann", name: "Marvin Hoffmann", nickname: "", email: "", password: "70362", trainingPassword: "70362", edv: "40519" },
  { id: "player_dutkowski", name: "André Dutkowski", nickname: "", email: "", password: "49185", trainingPassword: "49185", edv: "40307" },
  { id: "player_bronnikow", name: "Leon Bronnikow", nickname: "", email: "", password: "62830", trainingPassword: "62830", edv: "40517" },
  { id: "player_beiersdoerfer", name: "Armin Beiersdörfer", nickname: "", email: "", password: "38504", trainingPassword: "38504", edv: "40518" }
];
window.CLUB_MEMBERS_WBU = CLUB_MEMBERS_WBU;

var ALL_CLUB_PLAYER_IDS = CLUB_MEMBERS_WBU.map(p => p.id);
window.ALL_CLUB_PLAYER_IDS = ALL_CLUB_PLAYER_IDS;

// Offizielle Mannschaften der Saison 2026/2027 mit Ligen und Gegnern
var INITIAL_TEAMS = [
  {
    id: "team_pb1",
    seasonId: "season_2026_2027",
    name: "PaderBowler 1",
    league: "Verbandsliga 1",
    password: "paderbowler1",
    playerIds: [],
    opponents: ["VfL Holsen 3", "BV Brackwede 3", "MaxiStrike Hamm 2", "BV Detmold 2", "Bowlingfreunde Bielefeld 3"],
    matchdaysCount: 0,
    totalPins: 0,
    points: "0 : 0",
    average: 0.0
  },
  {
    id: "team_pb2",
    seasonId: "season_2026_2027",
    name: "PaderBowler 2",
    league: "Landesliga 1",
    password: "paderbowler2",
    playerIds: ["player_hatzig", "player_baumeister", "player_klipenstein", "player_gerdhenrich", "player_hoppe", "player_stoewer"],
    opponents: ["MaxiStrike Hamm 2", "BV Detmold 2", "VfL Holsen 3", "Bowlingfreunde Bielefeld 3", "BV Brackwede 3"],
    matchdaysCount: 5,
    totalPins: 18054,
    points: "38 : 12",
    average: 180.54
  },
  {
    id: "team_pb3",
    seasonId: "season_2026_2027",
    name: "PaderBowler 3",
    league: "Bezirksliga 2",
    password: "paderbowler3",
    playerIds: [],
    opponents: ["BC Lemgo", "BV Detmold 4", "BV Detmold 3", "PaderBowler 4", "BV Brackwede 4"],
    matchdaysCount: 0,
    totalPins: 0,
    points: "0 : 0",
    average: 0.0
  },
  {
    id: "team_pb4",
    seasonId: "season_2026_2027",
    name: "PaderBowler 4",
    league: "Bezirksliga 2",
    password: "paderbowler4",
    playerIds: [],
    opponents: ["PaderBowler 3", "BC Lemgo", "BV Detmold 4", "BV Detmold 3", "BV Brackwede 4"],
    matchdaysCount: 0,
    totalPins: 0,
    points: "0 : 0",
    average: 0.0
  }
];
window.INITIAL_TEAMS = INITIAL_TEAMS;

// Synchronisationsfunktion für Vereinsmitglieder & Mannschaften
function syncClubState(appStateObj) {
  if (!appStateObj) return false;
  let changed = false;

  // 1. Die 4 offiziellen Club-Teams (PB1, PB2, PB3, PB4) dürfen niemals in deletedTeamIds blockiert sein
  if (appStateObj.deletedTeamIds && Array.isArray(appStateObj.deletedTeamIds)) {
    const origDelLen = appStateObj.deletedTeamIds.length;
    appStateObj.deletedTeamIds = appStateObj.deletedTeamIds.filter(id => !['team_pb1', 'team_pb2', 'team_pb3', 'team_pb4'].includes(id));
    if (appStateObj.deletedTeamIds.length !== origDelLen) changed = true;
  }

  // Gelöschte Custom-Teams herausfiltern
  if (appStateObj.deletedTeamIds && Array.isArray(appStateObj.deletedTeamIds) && appStateObj.deletedTeamIds.length > 0) {
    const origLen = appStateObj.teams.length;
    appStateObj.teams = appStateObj.teams.filter(t => !appStateObj.deletedTeamIds.includes(t.id));
    if (appStateObj.teams.length !== origLen) changed = true;
  }

  // 2. Vereinsmitglieder abgleichen (alle 23 WBU-Spieler mit 5-stelligem Passwort)
  if (!Array.isArray(appStateObj.players)) {
    appStateObj.players = [];
    changed = true;
  }
  CLUB_MEMBERS_WBU.forEach(wbuP => {
    const existing = appStateObj.players.find(p => p.id === wbuP.id);
    if (!existing) {
      appStateObj.players.push({ ...wbuP });
      changed = true;
    } else {
      if (!existing.edv && wbuP.edv) {
        existing.edv = wbuP.edv;
        changed = true;
      }
      if (existing.email) {
        existing.email = "";
        changed = true;
      }
      if (!existing.trainingPassword || String(existing.trainingPassword).length !== 5) {
        existing.trainingPassword = wbuP.trainingPassword;
        changed = true;
      }
      if (!existing.password || String(existing.password).length !== 5) {
        existing.password = wbuP.password;
        changed = true;
      }
    }
  });

  // Allen evtl. neu hinzugefügten Custom-Spielern ebenfalls ein 5-stelliges Passwort zuweisen
  appStateObj.players.forEach(p => {
    if (p.email) {
      p.email = "";
      changed = true;
    }
    if (!p.trainingPassword || String(p.trainingPassword).length !== 5) {
      p.trainingPassword = generate5DigitPassword();
      changed = true;
    }
    if (!p.password || String(p.password).length !== 5) {
      p.password = p.trainingPassword;
      changed = true;
    }
  });

  // 3. Mannschaften abgleichen (PB1, PB2, PB3, PB4)
  const deleted = appStateObj.deletedTeamIds || [];
  const has2026Season = !appStateObj.seasons || appStateObj.seasons.some(s => s.id === 'season_2026_2027');
  if (has2026Season) {
    INITIAL_TEAMS.forEach(initT => {
      if (deleted.includes(initT.id)) return; // Gelöschtes Custom-Team nicht wiederbeleben

      let team = appStateObj.teams.find(t => t.id === initT.id);
      if (!team) {
        if (initT.id === 'team_pb1') {
          appStateObj.teams.unshift(JSON.parse(JSON.stringify(initT)));
        } else {
          appStateObj.teams.push(JSON.parse(JSON.stringify(initT)));
        }
        changed = true;
      } else {
        if (!team.seasonId) {
          team.seasonId = initT.seasonId;
          changed = true;
        }
        // Passwort auf team-spezifisches Standard-Passwort (paderbowler1 - paderbowler4) aktualisieren falls ungesetzt oder altes paderbowler
        if (!team.password || team.password === "paderbowler") {
          team.password = initT.password;
          changed = true;
        }
        if (initT.id === 'team_pb1') {
          if (team.name !== 'PaderBowler 1') { team.name = 'PaderBowler 1'; changed = true; }
          if (team.league !== 'Verbandsliga 1') { team.league = 'Verbandsliga 1'; changed = true; }
          if (JSON.stringify(team.opponents) !== JSON.stringify(initT.opponents)) {
            team.opponents = [...initT.opponents];
            changed = true;
          }
          if (!team._customSquadConfigured && (!team.playerIds || team.playerIds.length === ALL_CLUB_PLAYER_IDS.length)) {
            team.playerIds = [];
            changed = true;
          }
        } else if (initT.id === 'team_pb2') {
          if (team.name === 'Pader-Bowler-06 2') { team.name = 'PaderBowler 2'; changed = true; }
          if (team.league !== 'Landesliga 1') { team.league = 'Landesliga 1'; changed = true; }
          if (JSON.stringify(team.opponents) !== JSON.stringify(initT.opponents)) {
            team.opponents = [...initT.opponents];
            changed = true;
          }
        } else if (initT.id === 'team_pb3') {
          if (team.name !== 'PaderBowler 3') { team.name = 'PaderBowler 3'; changed = true; }
          if (team.league !== 'Bezirksliga 2') { team.league = 'Bezirksliga 2'; changed = true; }
          if (JSON.stringify(team.opponents) !== JSON.stringify(initT.opponents)) {
            team.opponents = [...initT.opponents];
            changed = true;
          }
          if (!team._customSquadConfigured && (!team.playerIds || team.playerIds.length === ALL_CLUB_PLAYER_IDS.length)) {
            team.playerIds = [];
            changed = true;
          }
        } else if (initT.id === 'team_pb4') {
          if (team.name !== 'PaderBowler 4') { team.name = 'PaderBowler 4'; changed = true; }
          if (team.league !== 'Bezirksliga 2') { team.league = 'Bezirksliga 2'; changed = true; }
          if (JSON.stringify(team.opponents) !== JSON.stringify(initT.opponents)) {
            team.opponents = [...initT.opponents];
            changed = true;
          }
          if (!team._customSquadConfigured && (!team.playerIds || team.playerIds.length === ALL_CLUB_PLAYER_IDS.length)) {
            team.playerIds = [];
            changed = true;
          }
        }
      }
    });
  }

  // 4. Trainings-Datenstruktur absichern
  if (!Array.isArray(appStateObj.trainingDays)) {
    appStateObj.trainingDays = [];
    changed = true;
  }

  return changed;
}
window.syncClubState = syncClubState;

// 3. Standard-Ausgangszustand für den Hub
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
  players: JSON.parse(JSON.stringify(CLUB_MEMBERS_WBU)),
  teams: JSON.parse(JSON.stringify(INITIAL_TEAMS)),
  trainingDays: []
};
window.defaultInitialAppState = defaultInitialAppState;

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

/**
 * Bowling Split-Erkennung nach offiziellen USBC & DBU Regeln (Sportordnung):
 * 1. Kopfpin (Pin 1) MUSS gefallen sein (!pins.includes(1)). Steht Pin 1, ist es ein Washout, NIEMALS ein Split!
 * 2. Mindestens 2 Pins stehen noch (pins.length >= 2). Ein einzelner Pin ist kein Split.
 * 3. Zwischen den stehenden Pins klafft mindestens eine Lücke (mindestens 1 gefallener Zwischenpin).
 *    Mehrere nicht zusammenhängende Gruppen im Pin-Dreieck = Split.
 *    Direkt berührende Pins oder Tandem-Sleeper ohne Zwischenpin (z. B. 2-3, 2-8, 3-9, 2-4-7, 3-6-10) = KEIN Split.
 */
function isBowlingSplit(standingPins) {
  if (!Array.isArray(standingPins)) return false;
  const pins = standingPins.map(p => Number(p)).filter(p => !isNaN(p) && p >= 1 && p <= 10);
  if (pins.length < 2) return false;
  if (pins.includes(1)) return false;

  const PIN_ADJACENCY = {
    2: [3, 4, 5, 8],
    3: [2, 5, 6, 9],
    4: [2, 7, 8],
    5: [2, 3, 8, 9],
    6: [3, 9, 10],
    7: [4],
    8: [2, 4, 5],
    9: [3, 5, 6],
    10: [6]
  };

  const standingSet = new Set(pins);
  const visited = new Set();
  let components = 0;

  for (let i = 0; i < pins.length; i++) {
    const pin = pins[i];
    if (!visited.has(pin)) {
      components++;
      if (components > 1) return true;
      const queue = [pin];
      visited.add(pin);
      while (queue.length > 0) {
        const curr = queue.shift();
        const neighbors = PIN_ADJACENCY[curr] || [];
        for (let j = 0; j < neighbors.length; j++) {
          const neighbor = neighbors[j];
          if (standingSet.has(neighbor) && !visited.has(neighbor)) {
            visited.add(neighbor);
            queue.push(neighbor);
          }
        }
      }
    }
  }

  return components > 1;
}
window.isBowlingSplit = isBowlingSplit;
if (typeof module !== 'undefined' && module.exports) {
  module.exports.isBowlingSplit = isBowlingSplit;
}

/**
 * Löst das Gegner-Objekt oder einen Gegner-Bezeichner in den echten Mannschaftsnamen auf.
 * Verhindert generische Texte wie "Gegner 1" oder "opp_detmold".
 * Bei neuen/leeren Spieltagen bleibt der Wert leer (""), sodass der Nutzer den Gegner bewusst auswählen muss.
 */
function resolveOpponentName(oppObj, team = null, gameIdx = 1) {
  if (!oppObj) {
    return '';
  }

  let rawName = '';
  let rawId = '';
  if (typeof oppObj === 'string') {
    rawName = oppObj.trim();
    rawId = rawName;
  } else if (typeof oppObj === 'object') {
    rawName = (oppObj.name || '').trim();
    rawId = (oppObj.id || '').trim();
  }

  // Wenn weder Name noch ID gesetzt sind: bewusst leer lassen!
  if (!rawName && !rawId) {
    return '';
  }

  const legacyMap = {
    opp_hamm: "MaxiStrike Hamm 2",
    opp_hamm2: "MaxiStrike Hamm 2",
    opp_detmold: "BV Detmold 2",
    opp_detmold2: "BV Detmold 2",
    opp_detmold3: "BV Detmold 3",
    opp_detmold4: "BV Detmold 4",
    opp_holsen: "VfL Holsen 3",
    opp_holsen3: "VfL Holsen 3",
    opp_bielefeld: "Bowlingfreunde Bielefeld 3",
    opp_bielefeld3: "Bowlingfreunde Bielefeld 3",
    opp_brackwede: "BV Brackwede 3",
    opp_brackwede3: "BV Brackwede 3",
    opp_brackwede4: "BV Brackwede 4",
    opp_lemgo: "BC Lemgo",
    opp_pb3: "PaderBowler 3",
    opp_pb4: "PaderBowler 4"
  };

  if (rawId && legacyMap[rawId]) return legacyMap[rawId];
  if (rawName && legacyMap[rawName]) return legacyMap[rawName];

  // Wenn bereits ein sauberer Name vorliegt (weder opp_ noch Gegner)
  if (rawName && !rawName.startsWith('opp_') && rawName !== 'Gegner' && !rawName.startsWith('Gegner ')) {
    return rawName;
  }
  if (rawId && !rawId.startsWith('opp_') && rawId !== 'Gegner' && !rawId.startsWith('Gegner ')) {
    return rawId;
  }

  if (rawId && rawId.startsWith('opp_')) {
    const idx = parseInt(rawId.replace('opp_', ''), 10);
    if (!isNaN(idx) && team?.opponents?.[idx]) {
      return team.opponents[idx];
    }
    const cleanKey = rawId.toLowerCase();
    for (const key of Object.keys(legacyMap)) {
      if (cleanKey.includes(key.replace('opp_', ''))) {
        return legacyMap[key];
      }
    }
  }

  // Nur bei echten Legacy-Platzhaltern "Gegner X" mit Punkten greift der Fallback
  if ((rawName === 'Gegner' || rawName.startsWith('Gegner ') || rawId === 'Gegner' || rawId.startsWith('Gegner ')) && oppObj.pins > 0) {
    if (team?.opponents && team.opponents[gameIdx - 1]) {
      return team.opponents[gameIdx - 1];
    }
  }

  return rawName || rawId || '';
}
window.resolveOpponentName = resolveOpponentName;

/**
 * Bereinigt Trainingstage vor dem Upload nach Firestore & im lokalen Speicher:
 * Cloud Firestore verbietet verschachtelte Arrays ("Nested arrays are not supported").
 * standingRolls: [[pins1], [pins2], [pins3]] wird daher in unverschachtelte flache Einzelfelder
 * standingRoll1, standingRoll2, standingRoll3 umgewandelt und standingRolls restlos gelöscht.
 */
function sanitizeTrainingDaysForFirestore(trainingDays) {
  if (!Array.isArray(trainingDays)) return [];
  return trainingDays.map(day => {
    if (!day || typeof day !== 'object') return day;
    const dayCopy = { ...day };
    if (Array.isArray(dayCopy.games)) {
      dayCopy.games = dayCopy.games.map(g => {
        if (!g || typeof g !== 'object') return g;
        const gCopy = { ...g };
        if (Array.isArray(gCopy.frames)) {
          gCopy.frames = gCopy.frames.map(f => {
            if (!f || typeof f !== 'object') return f;
            const fCopy = { ...f };
            // Legacy standingRolls migrieren falls vorhanden
            if (Array.isArray(fCopy.standingRolls)) {
              if ((!fCopy.standingRoll1 || fCopy.standingRoll1.length === 0) && Array.isArray(fCopy.standingRolls[0])) {
                fCopy.standingRoll1 = [...fCopy.standingRolls[0]];
              }
              if ((!fCopy.standingRoll2 || fCopy.standingRoll2.length === 0) && Array.isArray(fCopy.standingRolls[1])) {
                fCopy.standingRoll2 = [...fCopy.standingRolls[1]];
              }
              if ((!fCopy.standingRoll3 || fCopy.standingRoll3.length === 0) && Array.isArray(fCopy.standingRolls[2])) {
                fCopy.standingRoll3 = [...fCopy.standingRolls[2]];
              }
              delete fCopy.standingRolls;
            }
            // Sicherstellen, dass standingRoll1..3 flache Zahlen-Arrays sind
            fCopy.standingRoll1 = Array.isArray(fCopy.standingRoll1) ? fCopy.standingRoll1.filter(p => typeof p === 'number') : [];
            fCopy.standingRoll2 = Array.isArray(fCopy.standingRoll2) ? fCopy.standingRoll2.filter(p => typeof p === 'number') : [];
            fCopy.standingRoll3 = Array.isArray(fCopy.standingRoll3) ? fCopy.standingRoll3.filter(p => typeof p === 'number') : [];
            delete fCopy.standingRolls;
            return fCopy;
          });
        }
        return gCopy;
      });
    }
    return dayCopy;
  });
}
window.sanitizeTrainingDaysForFirestore = sanitizeTrainingDaysForFirestore;

/**
 * Normalisiert Trainingstage nach dem Laden aus der Cloud oder LocalStorage:
 * Stellt sicher, dass flache standingRoll1..3 Felder existieren und keine verschachtelten Arrays vorhanden sind.
 */
function restoreTrainingDaysFromFirestore(trainingDays) {
  // Verhindert verschachtelte Arrays auch lokal vollständig
  return sanitizeTrainingDaysForFirestore(trainingDays);
}
window.restoreTrainingDaysFromFirestore = restoreTrainingDaysFromFirestore;

/**
 * Berechnet für alle Mannschaften die Statistiken (Pins, Spieltage, Punkte, Schnitt, Kader)
 * direkt und dynamisch aus ihren Spieltagsdaten (Matchdays).
 */
function recalculateTeamTotalsFromMatchdays(state, matchdaysMap = null) {
  if (!state || !Array.isArray(state.teams)) return false;
  let changed = false;

  state.teams.forEach(team => {
    let mds = matchdaysMap ? matchdaysMap[team.id] : null;
    if (!mds) {
      try {
        const raw = localStorage.getItem(`paderbowler_matchdays_${team.id}`);
        if (raw) mds = JSON.parse(raw);
      } catch (e) {}
    }
    if (!mds || typeof mds !== 'object') return;

    let totalPins = 0;
    let totalGamesCount = 0;
    let playedMatchdays = 0;
    let wins = 0;
    let draws = 0;
    let losses = 0;
    const squadSet = new Set(Array.isArray(team.playerIds) ? team.playerIds : []);

    Object.values(mds).forEach(md => {
      if (!md || typeof md !== 'object') return;
      let mdHasGames = false;
      for (let g = 1; g <= 5; g++) {
        const opp = md.gameOpponents?.[g] || { pins: 0 };
        const lineups = md.gameLineups?.[g] || [];
        lineups.forEach(pId => squadSet.add(pId));

        let ourPins = 0;
        lineups.forEach(pId => {
          ourPins += md.gamePlayerPins?.[g]?.[pId] || 0;
        });

        if (md.gamePlayerPins?.[g]) {
          Object.keys(md.gamePlayerPins[g]).forEach(pId => {
            const pVal = md.gamePlayerPins[g][pId];
            if (pVal > 0) squadSet.add(pId);
          });
        }

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

    if (playedMatchdays > 0) {
      const pointsWon = wins * 2 + draws;
      const pointsLost = losses * 2 + draws;
      const avg = totalGamesCount > 0 ? parseFloat((totalPins / totalGamesCount).toFixed(2)) : 0;
      const newPts = `${pointsWon} : ${pointsLost}`;

      if (team.matchdaysCount !== playedMatchdays || team.totalPins !== totalPins || team.points !== newPts || team.average !== avg) {
        team.matchdaysCount = playedMatchdays;
        team.totalPins = totalPins;
        team.points = newPts;
        team.average = avg;
        changed = true;
      }

      if ((!team.playerIds || team.playerIds.length === 0) && squadSet.size > 0) {
        team.playerIds = Array.from(squadSet);
        changed = true;
      }
    }
  });

  return changed;
}
window.recalculateTeamTotalsFromMatchdays = recalculateTeamTotalsFromMatchdays;

// Lädt den globalen App-Zustand aus localStorage
function getAppState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && Array.isArray(parsed.teams) && parsed.teams.length > 0) {
        // Test-Trainingstage restlos entfernen
        if (Array.isArray(parsed.trainingDays)) {
          parsed.trainingDays = parsed.trainingDays.filter(d => d.id !== 'train_test_1795165622725' && !d.id?.startsWith('train_test_'));
          parsed.trainingDays = restoreTrainingDaysFromFirestore(parsed.trainingDays);
        }
        if (!Array.isArray(parsed.deletedTrainingDayIds)) parsed.deletedTrainingDayIds = [];
        if (!parsed.deletedTrainingDayIds.includes('train_test_1795165622725')) {
          parsed.deletedTrainingDayIds.push('train_test_1795165622725');
        }

        let changed = syncClubState(parsed);
        if (recalculateTeamTotalsFromMatchdays(parsed)) {
          changed = true;
        }
        if (changed) {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
          if (typeof triggerCloudSync === 'function') triggerCloudSync();
        }
        return parsed;
      }
    }
  } catch (e) {
    console.error("Fehler beim Laden von appState", e);
  }
  const cloned = JSON.parse(JSON.stringify(defaultInitialAppState));
  syncClubState(cloned);
  recalculateTeamTotalsFromMatchdays(cloned);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cloned));
  return cloned;
}

// Speichert den globalen App-Zustand in localStorage
function saveAppState(state) {
  if (state && Array.isArray(state.trainingDays)) {
    state.trainingDays = sanitizeTrainingDaysForFirestore(state.trainingDays);
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  if (typeof triggerCloudSync === 'function') {
    triggerCloudSync();
  }
}

// Lädt die Spieltage einer bestimmten Mannschaft und repariert automatisch etwaige Legacy-Gegner-IDs
function getTeamMatchdays(teamId) {
  if (!teamId) return {};
  const teamKey = `paderbowler_matchdays_${teamId}`;
  try {
    const state = getAppState();
    const team = state.teams ? state.teams.find(t => t.id === teamId) : null;
    const raw = localStorage.getItem(teamKey);

    let parsed = null;
    if (raw) {
      try {
        parsed = JSON.parse(raw);
      } catch (err) {
        parsed = null;
      }
    }

    if (teamId === 'team_pb2') {
      if (raw === null) {
        const cloned = JSON.parse(JSON.stringify(initialPb2Matchdays));
        localStorage.setItem(teamKey, JSON.stringify(cloned));
        return cloned;
      }
    }

    if (parsed && typeof parsed === 'object') {
      let repaired = false;
      for (const mdKey of Object.keys(parsed)) {
        const md = parsed[mdKey];
        const mdNum = parseInt(mdKey, 10);
        if (!md || typeof md !== 'object') continue;

        if (!md.gameOpponents) md.gameOpponents = {};

        for (let g = 1; g <= 5; g++) {
          const curOpp = md.gameOpponents[g];

          // Falls PB2 Spieltag 1-5: Abgleich mit initialPb2Matchdays
          if (teamId === 'team_pb2' && mdNum >= 1 && mdNum <= 5 && initialPb2Matchdays[mdNum]?.gameOpponents?.[g]) {
            const initOpp = initialPb2Matchdays[mdNum].gameOpponents[g];
            if (!curOpp || !curOpp.name || curOpp.name === "" || curOpp.name === "Gegner" || curOpp.name.startsWith("Gegner ") || curOpp.name.startsWith("opp_") || curOpp.id === "" || curOpp.id === "Gegner" || curOpp.id.startsWith("opp_")) {
              md.gameOpponents[g] = JSON.parse(JSON.stringify(initOpp));
              repaired = true;
              continue;
            }
          }

          // Allgemeines Bereinigen für alle Mannschaften und Spieltage
          if (curOpp) {
            const rawOppName = (curOpp.name || '').trim();
            const rawOppId = (curOpp.id || '').trim();
            if (rawOppName.startsWith('opp_') || rawOppId.startsWith('opp_') || rawOppName === 'Gegner' || rawOppName.startsWith('Gegner ') || rawOppId === 'Gegner' || !rawOppName) {
              const resolved = resolveOpponentName(curOpp, team, g);
              if (resolved && (curOpp.name !== resolved || curOpp.id !== resolved)) {
                curOpp.name = resolved;
                curOpp.id = resolved;
                repaired = true;
              }
            }
          }
        }
      }

      // PB4 Spieltag 3: Center automatisch auf Detmold Skyline ("center_detmold") korrigieren
      if (teamId === 'team_pb4' && parsed && parsed[3]) {
        if (parsed[3].centerId !== 'center_detmold') {
          parsed[3].centerId = 'center_detmold';
          repaired = true;
        }
      }

      if (repaired) {
        localStorage.setItem(teamKey, JSON.stringify(parsed));
      }
      return parsed;
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

// Exportiert den kompletten lokalen App- und Spieltagsdatenbestand als JSON-String
function exportAllAppDataAsJson() {
  const exportData = {
    version: '2.0',
    exportedAt: new Date().toISOString(),
    hub: getAppState(),
    matchdays: {}
  };
  const state = getAppState();
  if (state.teams && Array.isArray(state.teams)) {
    state.teams.forEach(t => {
      const teamKey = `paderbowler_matchdays_${t.id}`;
      const raw = localStorage.getItem(teamKey);
      if (raw) {
        try {
          exportData.matchdays[t.id] = JSON.parse(raw);
        } catch(e) {}
      }
    });
  }
  return JSON.stringify(exportData, null, 2);
}

// Importiert einen exportierten Datenbestand und aktualisiert localStorage
function importAllAppDataFromJson(jsonString) {
  try {
    const data = JSON.parse(jsonString);
    if (!data || typeof data !== 'object') return false;

    if (data.hub && Array.isArray(data.hub.teams) && data.hub.teams.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data.hub));
    }
    if (data.matchdays && typeof data.matchdays === 'object') {
      Object.keys(data.matchdays).forEach(teamId => {
        if (data.matchdays[teamId]) {
          localStorage.setItem(`paderbowler_matchdays_${teamId}`, JSON.stringify(data.matchdays[teamId]));
        }
      });
    }
    if (typeof triggerCloudSync === 'function') {
      triggerCloudSync();
    }
    return true;
  } catch(e) {
    console.error("Fehler beim Importieren des Backups", e);
    return false;
  }
}
window.exportAllAppDataAsJson = exportAllAppDataAsJson;
window.importAllAppDataFromJson = importAllAppDataFromJson;

/**
 * 3. BERECHNUNG DER STATISTIKEN EINER BESTIMMTEN MANNSCHAFT
 * Zählt ausschließlich die Einsätze und Strichlisten für dieses spezifische Team.
 */
function calculatePlayerStatsForTeam(teamId, appState = null) {
  const state = appState || getAppState();
  const team = state.teams.find(t => t.id === teamId) || state.teams[0];
  if (!team) return [];

  const matchdays = getTeamMatchdays(team.id);

  // Kader dieser Mannschaft ermitteln: Stammkader PLUS Ersatzspieler, die in den Spieltagen eingesetzt wurden
  const squadIds = new Set(team.playerIds || []);
  Object.values(matchdays).forEach(md => {
    for (let g = 1; g <= 5; g++) {
      const lineup = md.gameLineups?.[g] || [];
      lineup.forEach(pId => squadIds.add(pId));
    }
    if (md.matchdayTallies) {
      Object.keys(md.matchdayTallies).forEach(pId => {
        const t = md.matchdayTallies[pId];
        if (t && ((t.bier || 0) + (t.miss || 0) + (t.gutter || 0) + (t.split || 0) + (t.open9 || 0) + (t.turkey || 0)) > 0) {
          squadIds.add(pId);
        }
      });
    }
  });

  const activePlayers = state.players.filter(p => squadIds.has(p.id));

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
 * Unterstützt eine einzelne Saison, 'all' für alle Saisons oder ein Array von Saison-IDs.
 */
function calculateClubWidePlayerStats(seasonId = null, appState = null) {
  let actualSeasonId = seasonId;
  let actualAppState = appState;
  if (seasonId && typeof seasonId === 'object' && !Array.isArray(seasonId) && seasonId.teams) {
    actualAppState = seasonId;
    actualSeasonId = appState || 'all';
  }
  const state = (actualAppState && Array.isArray(actualAppState.teams)) ? actualAppState : getAppState();
  let seasonTeams = [];
  if (!actualSeasonId || actualSeasonId === 'all' || seasonId === 'all') {
    seasonTeams = state.teams || [];
  } else if (Array.isArray(actualSeasonId)) {
    seasonTeams = (state.teams || []).filter(t => actualSeasonId.includes(t.seasonId));
  } else {
    seasonTeams = (state.teams || []).filter(t => t.seasonId === actualSeasonId);
  }

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

/**
 * 4b. BERECHNUNG DER MEHRJAHRES-SAISON-ENTWICKLUNG (TRENDS & HISTORIE)
 * Berechnet für jede Saison die Kennzahlen (Schnitt, Pins, Spiele, High Game)
 * sowie die Entwicklung jedes einzelnen Spielers über die Saisons hinweg.
 */
function calculateMultiSeasonEvolution(seasonIds = null, appState = null) {
  const state = appState || getAppState();
  let seasonsToAnalyze = state.seasons || [];
  if (Array.isArray(seasonIds) && seasonIds.length > 0) {
    seasonsToAnalyze = seasonsToAnalyze.filter(s => seasonIds.includes(s.id));
  } else if (seasonIds && seasonIds !== 'all') {
    seasonsToAnalyze = seasonsToAnalyze.filter(s => s.id === seasonIds);
  }

  // Für jede Saison die Vereinsstatistik berechnen
  const seasonSummaries = seasonsToAnalyze.map(season => {
    const teamsInSeason = state.teams.filter(t => t.seasonId === season.id);
    const playerStats = calculateClubWidePlayerStats(season.id, state);

    let totalPins = 0;
    let totalGames = 0;
    let highGame = 0;
    let totalBierframes = 0;

    playerStats.forEach(p => {
      totalPins += p.totalPins;
      totalGames += p.gamesPlayed;
      if (p.highGame > highGame) highGame = p.highGame;
      totalBierframes += p.totalBierframes;
    });

    const average = totalGames > 0 ? parseFloat((totalPins / totalGames).toFixed(2)) : 0.0;

    return {
      seasonId: season.id,
      seasonName: season.name,
      teamsCount: teamsInSeason.length,
      totalPins,
      totalGames,
      average,
      highGame,
      totalBierframes,
      playerStats
    };
  });

  // Spieler-Entwicklung über die Saisons zusammenstellen
  const playerEvolution = state.players.map(player => {
    const pHistory = [];
    let careerGames = 0;
    let careerPins = 0;
    let careerHigh = 0;

    seasonSummaries.forEach(sSummary => {
      const pStat = sSummary.playerStats.find(p => p.id === player.id);
      if (pStat && pStat.gamesPlayed > 0) {
        careerGames += pStat.gamesPlayed;
        careerPins += pStat.totalPins;
        if (pStat.highGame > careerHigh) careerHigh = pStat.highGame;

        pHistory.push({
          seasonId: sSummary.seasonId,
          seasonName: sSummary.seasonName,
          games: pStat.gamesPlayed,
          pins: pStat.totalPins,
          avg: pStat.average,
          highGame: pStat.highGame,
          bierframes: pStat.totalBierframes
        });
      } else {
        pHistory.push({
          seasonId: sSummary.seasonId,
          seasonName: sSummary.seasonName,
          games: 0,
          pins: 0,
          avg: null,
          highGame: 0,
          bierframes: 0
        });
      }
    });

    const careerAvg = careerGames > 0 ? parseFloat((careerPins / careerGames).toFixed(2)) : 0.0;

    // Trend berechnen (zwischen den letzten beiden aktiven Saisons)
    const activeSeasons = pHistory.filter(h => h.games > 0);
    let trend = 0;
    let trendStr = '—';
    if (activeSeasons.length >= 2) {
      const prev = activeSeasons[activeSeasons.length - 2].avg;
      const curr = activeSeasons[activeSeasons.length - 1].avg;
      trend = parseFloat((curr - prev).toFixed(2));
      if (trend > 0) trendStr = `+${trend.toFixed(2)} ↗️`;
      else if (trend < 0) trendStr = `${trend.toFixed(2)} ↘️`;
      else trendStr = `0.00 ➡️`;
    }

    return {
      id: player.id,
      name: player.name.replace(/\s*\(.*?\)/, '').trim(),
      displayName: player.name.replace(/\s*\(.*?\)/, '').trim(),
      history: pHistory,
      careerGames,
      careerPins,
      careerAvg,
      careerHigh,
      trend,
      trendStr
    };
  }).filter(p => p.careerGames > 0 || seasonsToAnalyze.length <= 1);

  return {
    seasons: seasonSummaries,
    players: playerEvolution
  };
}

// =========================================================================
// 5. FIREBASE FIRESTORE ECHTZEIT-CLOUD-SYNCHRONISATION
// =========================================================================
var DEFAULT_FIREBASE_CONFIG = {
  apiKey: "AIzaSyDDKNBi3mfDMDja8dpqg4Vdhb18EmDPzWY",
  authDomain: "paderbowler.firebaseapp.com",
  projectId: "paderbowler",
  storageBucket: "paderbowler.firebasestorage.app",
  messagingSenderId: "1054848185434",
  appId: "1:1054848185434:web:213a1ebb73a3b9d6ded463",
  measurementId: "G-G4J3C6XGFB"
};
var FIREBASE_CONFIG = window.FIREBASE_CONFIG || DEFAULT_FIREBASE_CONFIG;

function getActiveFirebaseConfig() {
  try {
    const custom = localStorage.getItem('paderbowler_firebase_config');
    if (custom) {
      const parsed = JSON.parse(custom);
      if (parsed && parsed.projectId && parsed.apiKey) {
        return parsed;
      }
    }
  } catch(e) {}
  return window.FIREBASE_CONFIG || DEFAULT_FIREBASE_CONFIG;
}

let cloudDb = null;
let isApplyingCloudUpdate = false;
let isPushingToCloud = false;
let pushPending = false;
let cloudSyncDebounceTimer = null;
let cloudStatus = 'init'; // 'init' | 'synced' | 'syncing' | 'offline' | 'error'
let cloudStatusMessage = '';
let lastSyncTimestamp = null;

// Initialisiert Firebase und den Echtzeit-Listener
function initPaderbowlerCloudSync() {
  if (typeof firebase === 'undefined') {
    cloudStatus = 'offline';
    cloudStatusMessage = 'Lokal (Kein Firebase SDK geladen)';
    updateCloudStatusUI();
    return;
  }

  const config = getActiveFirebaseConfig();

  try {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
    cloudDb = firebase.firestore();
    try {
      cloudDb.settings({ experimentalAutoDetectLongPolling: true, merge: true });
    } catch(se) {}
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

  // Sicherheits-Timeout: Maximal 15 Sekunden im Status "syncing" verweilen (für Mobilfunkverbindungen)
  const syncTimeout = setTimeout(() => {
    if (cloudStatus === 'syncing') {
      if (typeof navigator !== 'undefined' && navigator.onLine === false) {
        cloudStatus = 'offline';
        cloudStatusMessage = 'Offline (Lokal gespeichert)';
      } else {
        cloudStatus = 'error';
        cloudStatusMessage = 'Lokal gespeichert (Cloud getrennt)';
      }
      updateCloudStatusUI();
    }
  }, 15000);

  // Echtzeit-Referenz auf das zentrale Vereins-Dokument
  const docRef = cloudDb.collection('clubs').doc('paderbowler_stats');
  
  // 1. Initialer direkter Abruf via get() für sofortigen und verlässlichen Status-Wechsel auf GRÜN
  docRef.get().then(doc => {
    clearTimeout(syncTimeout);
    if (doc.exists) {
      const data = doc.data();
      applyIncomingCloudData(data);
      cloudStatus = 'synced';
      lastSyncTimestamp = new Date();
      cloudStatusMessage = 'Cloud synchronisiert (' + lastSyncTimestamp.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' }) + ')';
      updateCloudStatusUI();
    } else {
      console.log("Initialisiere Cloud-Datenbank mit lokalem Datenbestand...");
      pushLocalDataToCloud(true);
    }
  }).catch(err => {
    clearTimeout(syncTimeout);
    console.warn("Firestore Init-Get Hinweis:", err);
    cloudStatus = 'error';
    cloudStatusMessage = 'Lokal gespeichert (Cloud getrennt)';
    updateCloudStatusUI();
  });

  // 2. Echtzeit-Listener für automatische Aktualisierungen anderer Geräte
  docRef.onSnapshot(doc => {
    clearTimeout(syncTimeout);
    if (doc && doc.exists) {
      // Lokale Zwischenschreibvorgänge vorübergehend ignorieren, um Schleifen zu verhindern
      if (doc.metadata && doc.metadata.hasPendingWrites) {
        return;
      }
      const data = doc.data();
      applyIncomingCloudData(data);
      cloudStatus = 'synced';
      lastSyncTimestamp = new Date();
      cloudStatusMessage = 'Cloud synchronisiert (' + lastSyncTimestamp.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' }) + ')';
      updateCloudStatusUI();
    }
  }, err => {
    clearTimeout(syncTimeout);
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

  // Online- & Offline-Ereignisse überwachen
  if (typeof window !== 'undefined') {
    window.addEventListener('online', () => {
      cloudStatus = 'syncing';
      updateCloudStatusUI();
      docRef.get().then(doc => {
        if (doc.exists) {
          applyIncomingCloudData(doc.data());
          cloudStatus = 'synced';
          lastSyncTimestamp = new Date();
          cloudStatusMessage = 'Cloud synchronisiert (' + lastSyncTimestamp.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' }) + ')';
          updateCloudStatusUI();
        }
      }).catch(() => {
        cloudStatus = 'error';
        updateCloudStatusUI();
      });
    });

    window.addEventListener('offline', () => {
      cloudStatus = 'offline';
      cloudStatusMessage = 'Offline (Lokal gespeichert)';
      updateCloudStatusUI();
    });
  }
}

// Überträgt eintreffende Cloud-Daten in den lokalen Gerätespeicher
// WICHTIG: Welcher Spieler auf diesem Handy angemeldet ist, bleibt IMMER rein lokal!
// Alle anderen Daten (Spieltage, Saisons, Teams und alle Trainingstage) werden synchronisiert.
function applyIncomingCloudData(data) {
  if (!data || isApplyingCloudUpdate) return;
  isApplyingCloudUpdate = true;

  try {
    const local = getAppState();
    const deletedIds = local.deletedTeamIds || (data.hub ? data.hub.deletedTeamIds : []) || [];
    const deletedTrainingIds = local.deletedTrainingDayIds || (data.hub ? data.hub.deletedTrainingDayIds : []) || [];

    if (data.hub && Array.isArray(data.hub.teams) && data.hub.teams.length > 0) {
      data.hub.deletedTeamIds = deletedIds;
      data.hub.deletedTrainingDayIds = deletedTrainingIds;

      // 1. Trainingstage intelligent zusammenführen (Union by ID)
      // Damit gehen keine lokal neu erfassten Trainingstage verloren und die Einheiten aller Spieler werden vereint.
      const localTrainingDays = Array.isArray(local.trainingDays) ? restoreTrainingDaysFromFirestore(local.trainingDays) : [];
      let cloudTrainingDays = Array.isArray(data.hub.trainingDays) ? restoreTrainingDaysFromFirestore(data.hub.trainingDays) : [];

      const trainingDaysMap = {};
      // Erst Cloud-Tage einfügen (außer gelöschte)
      cloudTrainingDays.forEach(d => {
        if (d && d.id && !deletedTrainingIds.includes(d.id)) {
          trainingDaysMap[d.id] = d;
        }
      });
      // Dann lokale Tage einfügen
      let hasLocalNewDays = false;
      localTrainingDays.forEach(d => {
        if (d && d.id && !deletedTrainingIds.includes(d.id)) {
          if (!trainingDaysMap[d.id]) {
            trainingDaysMap[d.id] = d;
            hasLocalNewDays = true;
          } else {
            const existing = trainingDaysMap[d.id];
            const localGamesCount = (d.games || []).length;
            const cloudGamesCount = (existing.games || []).length;
            if (localGamesCount > cloudGamesCount) {
              trainingDaysMap[d.id] = d;
              hasLocalNewDays = true;
            }
          }
        }
      });

      data.hub.trainingDays = Object.values(trainingDaysMap);

      syncClubState(data.hub);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data.hub));

      // Falls dieses Gerät neue Trainingstage hatte, die in der Cloud noch fehlten,
      // pushen wir die kombinierte Liste nach kurzer Pause hoch!
      if (hasLocalNewDays) {
        setTimeout(() => triggerCloudSync(), 800);
      }
    }

    if (data.matchdays && typeof data.matchdays === 'object' && Object.keys(data.matchdays).length > 0) {
      Object.keys(data.matchdays).forEach(teamId => {
        if (!deletedIds.includes(teamId)) {
          if (data.matchdays[teamId] && Object.keys(data.matchdays[teamId]).length > 0) {
            localStorage.setItem(`paderbowler_matchdays_${teamId}`, JSON.stringify(data.matchdays[teamId]));
          }
        } else {
          localStorage.removeItem(`paderbowler_matchdays_${teamId}`);
        }
      });
      if (data.hub) {
        recalculateTeamTotalsFromMatchdays(data.hub, data.matchdays);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data.hub));
      }
    }

    // WICHTIG: Der angemeldete Spieler bleibt IMMER lokal auf diesem Gerät!
    // 'paderbowler_training_logged_in_player' wird NIEMALS von Cloud-Daten berührt.

    // Event an alle offenen Fenster / Tabs senden
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
  if (!cloudDb) {
    cloudStatus = 'offline';
    cloudStatusMessage = 'Lokal gespeichert (Keine Cloud-Verbindung)';
    updateCloudStatusUI();
    return;
  }

  if (isPushingToCloud) {
    pushPending = true;
    return;
  }
  isPushingToCloud = true;

  cloudStatus = 'syncing';
  cloudStatusMessage = 'Speichere in Cloud...';
  updateCloudStatusUI();

  // Timeout falls Schreibvorgang netzwerkbedingt hängt (20 Sekunden für Mobilfunk & große Payloads)
  let pushFinished = false;
  const pushTimeout = setTimeout(() => {
    if (!pushFinished && cloudStatus === 'syncing') {
      cloudStatus = 'error';
      cloudStatusMessage = 'Lokal gespeichert (Timeout)';
      updateCloudStatusUI();
      isPushingToCloud = false;
    }
  }, 20000);
  
  try {
    const hubState = getAppState();
    const matchdaysObj = {};

    // Sammle alle Spieltage der bekannten Teams
    (hubState.teams || []).forEach(team => {
      matchdaysObj[team.id] = getTeamMatchdays(team.id);
    });

    // WICHTIG: Trainingstage von verschachtelten Arrays bereinigen!
    // Cloud Firestore verbietet verschachtelte Arrays ("Nested arrays are not supported").
    const cleanHub = JSON.parse(JSON.stringify(hubState));
    if (Array.isArray(cleanHub.trainingDays)) {
      cleanHub.trainingDays = sanitizeTrainingDaysForFirestore(cleanHub.trainingDays);
    }

    const payload = JSON.parse(JSON.stringify({
      hub: cleanHub,
      matchdays: matchdaysObj,
      clientTimestamp: new Date().toISOString()
    }));

    // Tiefenreinigung: Verhindert restlos jedes verschachtelte Array im gesamten Dokument
    function stripNestedArraysDeep(val) {
      if (Array.isArray(val)) {
        return val.map(item => {
          if (Array.isArray(item)) return item.filter(sub => !Array.isArray(sub));
          if (item && typeof item === 'object') return stripNestedArraysDeep(item);
          return item;
        }).filter(item => !Array.isArray(item));
      }
      if (val && typeof val === 'object') {
        const out = {};
        for (const k of Object.keys(val)) {
          out[k] = stripNestedArraysDeep(val[k]);
        }
        return out;
      }
      return val;
    }
    const safePayload = stripNestedArraysDeep(payload);
    safePayload.updatedAt = firebase.firestore.FieldValue.serverTimestamp();

    cloudDb.collection('clubs').doc('paderbowler_stats').set(safePayload)
      .then(() => {
        pushFinished = true;
        clearTimeout(pushTimeout);
        isPushingToCloud = false;
        cloudStatus = 'synced';
        lastSyncTimestamp = new Date();
        cloudStatusMessage = 'Cloud synchronisiert (' + lastSyncTimestamp.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' }) + ')';
        updateCloudStatusUI();

        if (pushPending) {
          pushPending = false;
          setTimeout(() => pushLocalDataToCloud(false), 300);
        }
      })
      .catch(err => {
        pushFinished = true;
        clearTimeout(pushTimeout);
        isPushingToCloud = false;
        console.warn("Fehler beim Cloud-Upload:", err);
        cloudStatus = 'error';
        if (err.code === 'permission-denied') {
          cloudStatusMessage = 'Cloud: Testmodus in Firestore aktivieren';
        } else {
          cloudStatusMessage = 'Lokal gespeichert (Cloud getrennt)';
        }
        updateCloudStatusUI();

        if (pushPending) {
          pushPending = false;
        }
      });
  } catch (err) {
    pushFinished = true;
    clearTimeout(pushTimeout);
    isPushingToCloud = false;
    console.error("pushLocalDataToCloud Exception:", err);
    cloudStatus = 'error';
    cloudStatusMessage = 'Lokal gespeichert (Fehler)';
    updateCloudStatusUI();
    pushPending = false;
  }
}

// Aktualisiert den visuellen Status-Indikator im Header (rein informativ: Grün, Gelb, Rot - ohne Pop-up-Fenster)
function updateCloudStatusUI() {
  const container = document.getElementById('cloudSyncStatusPill');
  if (!container) return;

  let badgeHtml = '';
  if (cloudStatus === 'synced') {
    // GRÜN: Erfolgreich mit Cloud verbunden und synchron
    badgeHtml = `
      <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-800 dark:text-emerald-400 border border-emerald-500/40 text-[11px] font-bold shadow-xs select-none" title="${cloudStatusMessage || 'Cloud synchron'}">
        <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span>Cloud synchron</span>
      </div>
    `;
  } else if (cloudStatus === 'syncing') {
    // GELB: Aktive Synchronisation oder Verbindungsaufbau
    badgeHtml = `
      <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/15 text-amber-800 dark:text-amber-400 border border-amber-500/40 text-[11px] font-bold shadow-xs select-none" title="${cloudStatusMessage || 'Synchronisiere...'}">
        <span class="w-2 h-2 rounded-full bg-amber-500 animate-ping"></span>
        <span>Synchronisiere...</span>
      </div>
    `;
  } else {
    // ROT: Offline oder Verbindung getrennt (lokal gespeichert)
    const isOffline = (cloudStatus === 'offline' || (cloudStatusMessage && cloudStatusMessage.includes('Offline')));
    const label = isOffline ? 'Offline (Lokal)' : 'Lokal (Cloud getrennt)';
    badgeHtml = `
      <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-500/15 text-rose-800 dark:text-rose-400 border border-rose-500/40 text-[11px] font-bold shadow-xs select-none" title="${cloudStatusMessage || 'Offline / Lokal'}">
        <span class="w-2 h-2 rounded-full bg-rose-500"></span>
        <span>${label}</span>
      </div>
    `;
  }
  container.innerHTML = badgeHtml;
}

// Stellt sicher, dass das Cloud-Status-Modal im Dokument vorhanden ist
function ensureCloudSyncModal() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('modalCloudSyncStatus')) return;

  const modal = document.createElement('div');
  modal.id = 'modalCloudSyncStatus';
  modal.className = 'fixed inset-0 z-50 bg-black/80 backdrop-blur-md hidden flex items-center justify-center p-3 sm:p-4 overflow-y-auto';
  modal.innerHTML = `
    <div class="bg-white border-2 border-[#23548F] rounded-3xl max-w-lg w-full p-5 sm:p-6 shadow-2xl space-y-4 text-slate-900 my-auto text-left">
      
      <!-- Header -->
      <div class="flex items-center justify-between border-b border-[#23548F]/20 pb-3">
        <div class="flex items-center gap-2.5">
          <div class="w-10 h-10 rounded-2xl bg-[#23548F]/10 text-[#23548F] border border-[#23548F]/30 flex items-center justify-center text-xl font-black">
            ☁️
          </div>
          <div>
            <h3 class="font-black text-base text-slate-900 leading-tight">Cloud-Synchronisation</h3>
            <p class="text-xs text-slate-500">Firebase Firestore Echtzeit-Datenbank</p>
          </div>
        </div>
        <button type="button" onclick="closeModal('modalCloudSyncStatus')" class="text-slate-500 hover:text-slate-900 text-xl font-bold">&times;</button>
      </div>

      <!-- Status-Box -->
      <div id="cloudModalStatusBox" class="p-3.5 rounded-2xl border flex items-center gap-3">
        <!-- Dynamischer Status -->
      </div>

      <!-- Sync-Architektur Erklärung -->
      <div class="space-y-2.5 bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs">
        <div class="flex items-start gap-2.5">
          <span class="text-base shrink-0">📱</span>
          <div>
            <strong class="text-slate-900 block">Nur lokal auf diesem Gerät gespeichert:</strong>
            <p class="text-slate-600 mt-0.5">Welcher Spieler auf diesem Smartphone angemeldet ist (dein Benutzer-Login), deine Theme-Wahl (Hell/Dunkel) und ungespeicherte Wurf-Entwürfe.</p>
          </div>
        </div>
        <div class="border-t border-slate-200 pt-2 flex items-start gap-2.5">
          <span class="text-base shrink-0">☁️</span>
          <div>
            <strong class="text-slate-900 block">In der Cloud zwischen allen Geräten synchronisiert:</strong>
            <p class="text-slate-600 mt-0.5">Alle Spieltage aller 4 Mannschaften, alle absolvierten Trainings-Tage aller Spieler (für die gemeinsame Vereinsstatistik), die Mitgliederliste, Kader und Saisons.</p>
          </div>
        </div>
      </div>

      <!-- Fehlerbehebung / Firebase Console Anleitung falls nötig -->
      <div id="cloudModalTroubleshooting" class="hidden text-xs bg-amber-50 border border-amber-300 rounded-2xl p-3.5 text-amber-900 space-y-1.5">
        <strong class="font-bold flex items-center gap-1.5">
          <span>⚠️</span>
          <span>Firestore Testmodus / Sicherheitsregeln</span>
        </strong>
        <p class="text-[11px] leading-relaxed">
          Falls der Zugriff verweigert wird (Permission Denied): In der <strong>Firebase Console</strong> unter <em>Firestore Database &rarr; Regeln</em> folgenden Testmodus eintragen und veröffentlichen:
        </p>
        <code class="block bg-amber-100 p-2 rounded-lg font-mono text-[10px] text-amber-950 overflow-x-auto select-all">
rules_version = '2';<br>
service cloud.firestore {<br>
&nbsp;&nbsp;match /databases/{database}/documents {<br>
&nbsp;&nbsp;&nbsp;&nbsp;match /{document=**} { allow read, write: if true; }<br>
&nbsp;&nbsp;}<br>
}
        </code>
      </div>

      <!-- Erweiterte Firebase-Einstellungen (Collapsible) -->
      <details class="text-xs bg-slate-50 border border-slate-200 rounded-2xl p-3">
        <summary class="font-bold text-slate-700 cursor-pointer select-none">⚙️ Eigene Firebase-Konfiguration (Erweitert)</summary>
        <div class="mt-3 space-y-2 pt-2 border-t border-slate-200">
          <div>
            <label class="block font-bold text-slate-600 mb-0.5 text-[10px]">Project ID:</label>
            <input type="text" id="cfgCloudProjectId" class="w-full bg-white border border-slate-300 rounded-lg p-1.5 text-xs font-mono">
          </div>
          <div>
            <label class="block font-bold text-slate-600 mb-0.5 text-[10px]">API Key:</label>
            <input type="text" id="cfgCloudApiKey" class="w-full bg-white border border-slate-300 rounded-lg p-1.5 text-xs font-mono">
          </div>
          <div class="flex items-center gap-2 pt-1">
            <button type="button" onclick="saveCustomCloudConfig()" class="py-1.5 px-3 rounded-lg bg-[#23548F] text-white font-bold text-[11px] touch-btn">
              Konfiguration speichern
            </button>
            <button type="button" onclick="resetCloudConfigToDefault()" class="py-1.5 px-3 rounded-lg bg-white border border-slate-300 text-slate-700 font-bold text-[11px] hover:bg-slate-100 touch-btn">
              Standard wiederherstellen
            </button>
          </div>
        </div>
      </details>

      <!-- Footer Buttons -->
      <div class="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-200">
        <button type="button" onclick="triggerCloudSync(); openCloudSyncModal();" class="py-2.5 px-4 rounded-xl bg-[#3E8370] hover:bg-[#326a5b] text-white font-black text-xs border border-[#3E8370] shadow-sm touch-btn flex items-center gap-1.5">
          <span>🔄 Jetzt synchronisieren</span>
        </button>
        <button type="button" onclick="closeModal('modalCloudSyncStatus')" class="py-2.5 px-5 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs shadow-md touch-btn">
          Schließen
        </button>
      </div>

    </div>
  `;
  document.body.appendChild(modal);
}

function openCloudSyncModal() {
  ensureCloudSyncModal();
  const box = document.getElementById('cloudModalStatusBox');
  const trouble = document.getElementById('cloudModalTroubleshooting');

  const config = getActiveFirebaseConfig();
  const pIdInp = document.getElementById('cfgCloudProjectId');
  const apiKeyInp = document.getElementById('cfgCloudApiKey');
  if (pIdInp) pIdInp.value = config.projectId || '';
  if (apiKeyInp) apiKeyInp.value = config.apiKey || '';

  if (cloudStatus === 'synced') {
    box.className = 'p-3.5 rounded-2xl border bg-emerald-50 border-emerald-300 text-emerald-900 flex items-center gap-3';
    box.innerHTML = `
      <div class="w-8 h-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-black text-sm shrink-0">✓</div>
      <div>
        <strong class="font-black text-sm block">Cloud ist verbunden &amp; synchron!</strong>
        <span class="text-xs text-emerald-700">${cloudStatusMessage} &bull; Projekt: <code>${config.projectId}</code></span>
      </div>
    `;
    if (trouble) trouble.classList.add('hidden');
  } else if (cloudStatus === 'syncing') {
    box.className = 'p-3.5 rounded-2xl border bg-amber-50 border-amber-300 text-amber-900 flex items-center gap-3';
    box.innerHTML = `
      <div class="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center font-black text-sm shrink-0 animate-spin">⟳</div>
      <div>
        <strong class="font-black text-sm block">Synchronisiere Daten mit der Cloud...</strong>
        <span class="text-xs text-amber-700">Verbindung zu Firestore wird hergestellt.</span>
      </div>
    `;
    if (trouble) trouble.classList.add('hidden');
  } else {
    box.className = 'p-3.5 rounded-2xl border bg-rose-50 border-rose-300 text-rose-900 flex items-center gap-3';
    box.innerHTML = `
      <div class="w-8 h-8 rounded-xl bg-rose-500 text-white flex items-center justify-center font-black text-sm shrink-0">!</div>
      <div>
        <strong class="font-black text-sm block">Cloud getrennt / Status: ${cloudStatusMessage || 'Lokal'}</strong>
        <span class="text-xs text-rose-700">Daten sind sicher auf diesem Gerät gespeichert.</span>
      </div>
    `;
    if (trouble) {
      if (cloudStatusMessage.includes('aktivieren') || cloudStatusMessage.includes('permission-denied') || cloudStatus === 'error') {
        trouble.classList.remove('hidden');
      } else {
        trouble.classList.add('hidden');
      }
    }
  }

  const modal = document.getElementById('modalCloudSyncStatus');
  if (modal) modal.classList.remove('hidden');
}

function saveCustomCloudConfig() {
  const pId = document.getElementById('cfgCloudProjectId')?.value.trim();
  const apiKey = document.getElementById('cfgCloudApiKey')?.value.trim();
  if (!pId || !apiKey) {
    alert("Bitte mindestens Project ID und API Key angeben.");
    return;
  }
  const custom = {
    apiKey: apiKey,
    authDomain: `${pId}.firebaseapp.com`,
    projectId: pId,
    storageBucket: `${pId}.firebasestorage.app`,
    messagingSenderId: "1054848185434",
    appId: "1:1054848185434:web:custom"
  };
  localStorage.setItem('paderbowler_firebase_config', JSON.stringify(custom));
  alert("✅ Firebase-Konfiguration gespeichert! Verbindung wird neu aufgebaut...");
  initPaderbowlerCloudSync();
  openCloudSyncModal();
}

function resetCloudConfigToDefault() {
  localStorage.removeItem('paderbowler_firebase_config');
  alert("Standard-Firebase-Konfiguration wiederhergestellt. Verbindung wird neu aufgebaut...");
  initPaderbowlerCloudSync();
  openCloudSyncModal();
}

// Starte Cloud-Sync automatisch beim Laden
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', initPaderbowlerCloudSync);
  } else {
    initPaderbowlerCloudSync();
  }
}

window.initPaderbowlerCloudSync = initPaderbowlerCloudSync;
window.triggerCloudSync = triggerCloudSync;
window.openCloudSyncModal = openCloudSyncModal;
window.getActiveFirebaseConfig = getActiveFirebaseConfig;
window.saveCustomCloudConfig = saveCustomCloudConfig;
window.resetCloudConfigToDefault = resetCloudConfigToDefault;

// =========================================================================
// 6. OFFIZIELLE VEREINS- & TEAM-AWARDS DEFINITIONEN (2026/2027)
// Exakte Sprüche, Titel & Erklärungen laut Vereinsbeschluss
// =========================================================================
var AWARD_DEFINITIONS = [
  {
    id: "award_raeumverweigerer",
    metricKey: "totalRaeumfehler",
    awardName: "Der Räumverweigerer",
    titel: "Räumfehler-König",
    spruch: "Ein Pin ist kein Pin – zumindest nach seiner Rechnung.",
    erklaerung: "Für den Spieler mit dem größten Herz für einsame Pins bei einfachen Räumbildern.",
    category: "gaudi",
    unit: "Räumfehler",
    icon: "❌"
  },
  {
    id: "award_bierframe_baron",
    metricKey: "totalBierframes",
    awardName: "Der Bierframe-Baron",
    titel: "Bierframe-König",
    spruch: "Er spielt nicht auf Punkte, er sorgt für die Hydration des Teams.",
    erklaerung: "Für den treuesten Sponsor der Mannschaftskasse und die meisten kassierten Bierframes der Saison.",
    category: "gaudi",
    unit: "Bierframes",
    icon: "🍺"
  },
  {
    id: "award_goldene_rinne",
    metricKey: "totalGutterAnwurf",
    awardName: "Die Goldene Rinne",
    titel: "Herr der Rinne",
    spruch: "Warum die Mitte nehmen, wenn links und rechts so schöne Kanäle sind?",
    erklaerung: "Für den sichersten Griff ins Abseits und die meisten Gutter-Bälle direkt beim ersten Wurf.",
    category: "gaudi",
    unit: "Pumps (1. Wurf)",
    icon: "🎳"
  },
  {
    id: "award_silberner_split",
    metricKey: "totalSplitUnder50",
    awardName: "Silberner Split",
    titel: "Split-König",
    spruch: "Was die Bahn trennt, soll der Mensch nicht wieder zusammenfügen.",
    erklaerung: "Für den respektvollen Umgang mit unmöglichen Aufgaben und die meisten offenen Splits.",
    category: "gaudi",
    unit: "Offene Splits",
    icon: "⚡"
  },
  {
    id: "award_dekorateur",
    metricKey: "totalNinthFrameOpen",
    awardName: "Der Dekorateur",
    titel: "Meister der offenen Enden",
    spruch: "Warum abräumen, wenn man auch Dekoration stehen lassen kann?",
    erklaerung: "Für maximale Spannung kurz vor Schluss und die meisten offenen 9. Frames der Saison.",
    category: "gaudi",
    unit: "9. Frame offen",
    icon: "🎀"
  },
  {
    id: "award_strike_maestro",
    metricKey: "totalDrilling",
    awardName: "Strike-Maestro",
    titel: "Turkey-König",
    spruch: "Er beherrscht Rhythmus, Technik und das Geräusch fallender Pins.",
    erklaerung: "Für eiskalte Serien und die meisten Drillinge (3 Strikes in Folge) der Saison.",
    category: "sport",
    unit: "Drillinge",
    icon: "🦃"
  },
  {
    id: "award_bahn_baendiger",
    metricKey: "totalUnder170",
    awardName: "Bahn-Bändiger",
    titel: "Tiefstapler der Saison",
    spruch: "Manchmal bändigt er die Bahn, manchmal sie ihn.",
    erklaerung: "Für das Schonen des Pinsetters und die meisten Einzelspiele unter 170 Pins.",
    category: "gaudi",
    unit: "Spiele < 170",
    icon: "🎢"
  },
  {
    id: "award_pin_dominator",
    metricKey: "totalOver210",
    awardName: "Pin-Dominator",
    titel: "Highscore-Jäger",
    spruch: "Er lässt kaum einen Pin stehen.",
    erklaerung: "Für absolute Dominanz auf der Bahn und die meisten Einzelspiele über 210 Pins.",
    category: "sport",
    unit: "Spiele > 210",
    icon: "🔥"
  },
  {
    id: "award_schnapszahl_zauberer",
    metricKey: "totalSchnapszahl",
    awardName: "Schnapszahl-Zauberer",
    titel: "Magier der Ziffern",
    spruch: "Präzision ist kein Zufall, sondern eine Frage der richtigen Promille-Mathematik.",
    erklaerung: "Für ein magisches Händchen bei Punktlandungen auf 111 Pins, 222 Pins oder anderen Schnapszahlen.",
    category: "gaudi",
    unit: "Schnapszahlen",
    icon: "✨"
  },
  {
    id: "award_saison_mvp",
    metricKey: "average",
    awardName: "Saison-MVP",
    titel: "Bester Saisonschnitt",
    spruch: "Konstanz auf allerhöchstem Niveau.",
    erklaerung: "Höchster Gesamtschnitt der Saison bei mindestens 5 absolvierten Einsätzen.",
    category: "sport",
    unit: "Schnitt",
    icon: "👑"
  },
  {
    id: "award_high_game",
    metricKey: "highGame",
    awardName: "High-Game-König",
    titel: "Höchstes Einzelspiel",
    spruch: "Wenn der Knoten platzt und die Bahn brennt.",
    erklaerung: "Die höchste erzielte Einzelspiel-Punktzahl der Saison.",
    category: "sport",
    unit: "Pins",
    icon: "🎯"
  },
  {
    id: "award_dauerbrenner",
    metricKey: "gamesPlayed",
    awardName: "Der Dauerbrenner",
    titel: "Einsatz-König",
    spruch: "Immer zur Stelle, wenn das Team ruft.",
    erklaerung: "Meiste absolvierte Spiele der Saison.",
    category: "sport",
    unit: "Spiele",
    icon: "🏃"
  }
];
window.AWARD_DEFINITIONS = AWARD_DEFINITIONS;

// =========================================================================
// 7. SPITZNAMEN- & ANZEIGE-HELFER
// =========================================================================
function formatPlayerDisplayName(player, includeNickname = true) {
  if (!player) return '';
  const cleanName = (player.name || '').replace(/\s*\([^)]*\)/g, '').trim();
  const nick = (player.nickname || '').trim();
  if (includeNickname && nick) {
    return `${cleanName} (${nick})`;
  }
  return cleanName;
}
window.formatPlayerDisplayName = formatPlayerDisplayName;

// =========================================================================
// 8. SAISON-ABSCHLUSS & SCHRIFTFÜHRER-FREIGABE (SAISONHÖHEPUNKT)
// =========================================================================
function isTeamSeasonFinalized(teamId, appStateObj = null) {
  if (!teamId || teamId === 'all') return false;
  const state = appStateObj || getAppState();
  const team = (state.teams || []).find(t => t.id === teamId);
  return !!(team && team.seasonFinalized === true);
}

function finalizeTeamSeason(teamId, enteredPassword, appStateObj = null) {
  const state = appStateObj || getAppState();
  const team = (state.teams || []).find(t => t.id === teamId);
  if (!team) return { success: false, message: "Mannschaft nicht gefunden." };

  const expectedPw = team.password || ('paderbowler' + (team.id || '').replace('team_pb', ''));
  if (enteredPassword !== expectedPw && enteredPassword !== "SuperMarius") {
    return { success: false, message: "Falsches Mannschafts-Passwort! Freigabe verweigert." };
  }

  team.seasonFinalized = true;
  saveAppState(state);
  return { success: true, message: `Saison für ${team.name} erfolgreich abgeschlossen und freigegeben!` };
}

function unfinalizeTeamSeason(teamId, enteredPassword, appStateObj = null) {
  const state = appStateObj || getAppState();
  const team = (state.teams || []).find(t => t.id === teamId);
  if (!team) return { success: false, message: "Mannschaft nicht gefunden." };

  const expectedPw = team.password || ('paderbowler' + (team.id || '').replace('team_pb', ''));
  if (enteredPassword !== expectedPw && enteredPassword !== "SuperMarius") {
    return { success: false, message: "Falsches Mannschafts-Passwort!" };
  }

  team.seasonFinalized = false;
  saveAppState(state);
  return { success: true, message: `Saison für ${team.name} wieder zur Bearbeitung gesperrt.` };
}

function areAllTeamsSeasonFinalized(appStateObj = null, seasonId = null) {
  const state = appStateObj || getAppState();
  if (!state || !Array.isArray(state.teams) || state.teams.length === 0) return true;
  const relevantTeams = (seasonId && seasonId !== 'all')
    ? state.teams.filter(t => !t.seasonId || t.seasonId === seasonId)
    : state.teams;
  if (relevantTeams.length === 0) return true;
  return relevantTeams.every(t => isTeamSeasonFinalized(t.id, state));
}

window.isTeamSeasonFinalized = isTeamSeasonFinalized;
window.finalizeTeamSeason = finalizeTeamSeason;
window.unfinalizeTeamSeason = unfinalizeTeamSeason;
window.areAllTeamsSeasonFinalized = areAllTeamsSeasonFinalized;

// =========================================================================
// 8.5 TRAININGS-CENTER DATEN & AUTHENTIFIZIERUNG
// =========================================================================
function getTrainingPlayerPassword(player) {
  if (!player) return '';
  if (player.trainingPassword && String(player.trainingPassword).length === 5) {
    return String(player.trainingPassword);
  }
  if (player.password && String(player.password).length === 5) {
    return String(player.password);
  }

  const wbu = (typeof CLUB_MEMBERS_WBU !== 'undefined' ? CLUB_MEMBERS_WBU : []).find(m => m.id === player.id);
  if (wbu && (wbu.trainingPassword || wbu.password)) {
    const pw = String(wbu.trainingPassword || wbu.password);
    player.trainingPassword = pw;
    player.password = pw;
    return pw;
  }

  // Deterministischer 5-stelliger Zufallsgenerator basierend auf Spieler-ID & Name
  let hash = 0;
  const str = (player.id || '') + (player.name || '') + 'PB06';
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  const code = String(10000 + (Math.abs(hash) % 90000));
  player.trainingPassword = code;
  player.password = code;
  return code;
}

function validateTrainingLogin(playerId, enteredPassword, appStateObj = null) {
  const state = appStateObj || getAppState();
  const player = (state.players || []).find(p => p.id === playerId);
  if (!player) return { success: false, message: "Spieler nicht gefunden." };

  const expectedPw = getTrainingPlayerPassword(player);
  const trimmedEntered = (enteredPassword || '').trim();
  const normalizedEntered = trimmedEntered.toLowerCase();
  const rawFirstName = (player.name || '').replace(/\s*\([^)]*\)/g, '').trim().split(' ')[0].toLowerCase();

  // Akzeptiert: 5-stelliges Passwort, abwärtskompatiblen Vornamen oder Masterpasswort SuperMarius (egal ob Groß-/Kleinschreibung)
  if (normalizedEntered === expectedPw.toLowerCase() || normalizedEntered === rawFirstName || normalizedEntered === "supermarius" || trimmedEntered === "SuperMarius") {
    localStorage.setItem('paderbowler_training_logged_in_player', playerId);
    return { success: true, player };
  }
  return { success: false, message: `Falsches Passwort für ${player.name}!\n\nBitte gib dein persönliches 5-stelliges Passwort oder das Master-Passwort ein.` };
}

function getLoggedInTrainingPlayer(appStateObj = null) {
  const state = appStateObj || getAppState();
  const savedId = localStorage.getItem('paderbowler_training_logged_in_player');
  if (!savedId) return null;
  return (state.players || []).find(p => p.id === savedId) || null;
}

function logoutTrainingPlayer() {
  localStorage.removeItem('paderbowler_training_logged_in_player');
}

window.getTrainingPlayerPassword = getTrainingPlayerPassword;
window.validateTrainingLogin = validateTrainingLogin;
window.getLoggedInTrainingPlayer = getLoggedInTrainingPlayer;
window.logoutTrainingPlayer = logoutTrainingPlayer;

// =========================================================================
// 9. DARK MODE THEME ENGINE
// =========================================================================
function getPreferredTheme() {
  const saved = localStorage.getItem('paderbowler_theme');
  if (saved === 'dark' || saved === 'light') return saved;
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
}

function applyTheme(theme) {
  const isDark = (theme === 'dark');
  if (isDark) {
    document.documentElement.classList.add('dark');
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    document.documentElement.setAttribute('data-theme', 'light');
  }
  updateThemeToggleButtons(theme);
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('paderbowler-theme-changed', { detail: { theme } }));
  }
}

function initTheme() {
  const theme = getPreferredTheme();
  applyTheme(theme);
}

function toggleTheme() {
  const current = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  const next = (current === 'dark') ? 'light' : 'dark';
  localStorage.setItem('paderbowler_theme', next);
  applyTheme(next);
  return next;
}

function updateThemeToggleButtons(theme) {
  const isDark = (theme === 'dark');
  document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
    const icon = btn.querySelector('.theme-toggle-icon');
    const label = btn.querySelector('.theme-toggle-label');
    if (icon) icon.textContent = isDark ? '☀️' : '🌙';
    if (label) label.textContent = isDark ? 'Hell' : 'Dunkel';
    btn.setAttribute('title', isDark ? 'Zu hellem Design wechseln' : 'Zu dunklem Design (Dark Mode) wechseln');
  });
}

function injectDarkStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('paderbowler-dark-styles')) return;
  const style = document.createElement('style');
  style.id = 'paderbowler-dark-styles';
  style.textContent = `
    html.dark {
      color-scheme: dark;
    }
    html.dark body {
      background-color: #0b1120 !important;
      color: #f1f5f9 !important;
    }
    html.dark header {
      background-color: #0f172a !important;
      border-color: #334155 !important;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5) !important;
    }
    html.dark footer,
    html.dark .fixed.bottom-0 {
      background-color: #0f172a !important;
      border-color: #334155 !important;
      box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.6) !important;
    }

    /* 1. KARTEN, FENSTER & HINTERGRÜNDE (FARBLICH ABGESETZT) */
    html.dark .bg-white {
      background-color: #1e293b !important;
      color: #f1f5f9 !important;
    }
    html.dark .bg-white.border-2,
    html.dark .bg-white.border,
    html.dark [class*="bg-white"][class*="rounded-2xl"],
    html.dark [class*="bg-white"][class*="rounded-xl"] {
      background-color: #1e293b !important;
      border-color: #475569 !important;
      box-shadow: 0 4px 16px -2px rgba(0, 0, 0, 0.5), 0 2px 4px -2px rgba(0, 0, 0, 0.3) !important;
    }
    html.dark .hover\\:border-\\[\\#23548F\\]:hover {
      border-color: #60a5fa !important;
      box-shadow: 0 8px 24px -4px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(96, 165, 250, 0.35) !important;
    }

    /* Modals & Dialog-Fenster (stark vom Hintergrund abgehoben) */
    html.dark .modal-content,
    html.dark [id^="modal"] > div {
      background-color: #1e293b !important;
      color: #f1f5f9 !important;
      border: 2px solid #475569 !important;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.9), 0 0 0 1px rgba(255, 255, 255, 0.08) !important;
    }
    html.dark [id^="modal"] .border-b,
    html.dark [id^="modal"] .border-t {
      border-color: #334155 !important;
    }

    /* Abgesetzte Vertiefungen & Innenkästen (Wells / Recessed Sub-Panels) */
    html.dark .bg-\\[\\#E4D7CF\\],
    html.dark .bg-\\[\\#E4D7CF\\]\\/70,
    html.dark .bg-\\[\\#E4D7CF\\]\\/60,
    html.dark .bg-\\[\\#E4D7CF\\]\\/40,
    html.dark .bg-\\[\\#E4D7CF\\]\\/30,
    html.dark .bg-\\[\\#E4D7CF\\]\\/20,
    html.dark .bg-\\[\\#E4D7CF\\]\\/10,
    html.dark .bg-slate-100 {
      background-color: #0f172a !important;
      border-color: #334155 !important;
      color: #f1f5f9 !important;
    }
    html.dark .bg-slate-50,
    html.dark .bg-slate-50\\/80 {
      background-color: #182234 !important;
      color: #f8fafc !important;
    }

    /* 2. RAHMEN (BORDERS) KLAR KONTURIERT */
    html.dark .border-\\[\\#A499A7\\],
    html.dark .border-\\[\\#8e8292\\],
    html.dark .border-slate-200,
    html.dark .border-slate-300 {
      border-color: #475569 !important;
    }
    html.dark .border-\\[\\#A499A7\\]\\/60,
    html.dark .border-\\[\\#A499A7\\]\\/50,
    html.dark .border-\\[\\#A499A7\\]\\/40,
    html.dark .border-\\[\\#A499A7\\]\\/30,
    html.dark .border-\\[\\#A499A7\\]\\/20,
    html.dark .border-slate-200\\/50,
    html.dark .border-slate-300\\/50 {
      border-color: #334155 !important;
    }
    html.dark .border-\\[\\#23548F\\] {
      border-color: #3b82f6 !important;
    }
    html.dark .border-\\[\\#70C04D\\],
    html.dark .border-\\[\\#5ea83e\\] {
      border-color: #22c55e !important;
    }
    html.dark .border-\\[\\#DE4341\\] {
      border-color: #ef4444 !important;
    }
    html.dark .border-\\[\\#E8C543\\],
    html.dark .border-\\[\\#cfae2e\\] {
      border-color: #f59e0b !important;
    }
    html.dark .border-\\[\\#3E8370\\] {
      border-color: #14b8a6 !important;
    }
    html.dark .border-\\[\\#43447D\\] {
      border-color: #6366f1 !important;
    }
    html.dark .border-\\[\\#A62F8B\\] {
      border-color: #c084fc !important;
    }
    html.dark .border-\\[\\#9D5A47\\] {
      border-color: #f97316 !important;
    }
    html.dark .border-\\[\\#ED755D\\] {
      border-color: #fb7185 !important;
    }

    /* 3. BUTTONS FARBLICH ABGESETZT & GUT ERKENNBAR */
    /* Primäre Action-Buttons (PaderBowler Blau -> Strahlendes Royal Blue) */
    html.dark .bg-\\[\\#23548F\\],
    html.dark button.bg-\\[\\#23548F\\],
    html.dark a.bg-\\[\\#23548F\\] {
      background-color: #2563eb !important;
      border-color: #3b82f6 !important;
      color: #ffffff !important;
      box-shadow: 0 2px 6px rgba(37, 99, 235, 0.4) !important;
    }
    html.dark .bg-\\[\\#23548F\\]:hover,
    html.dark button.bg-\\[\\#23548F\\]:hover,
    html.dark a.bg-\\[\\#23548F\\]:hover,
    html.dark .hover\\:bg-\\[\\#1a4170\\]:hover,
    html.dark .hover\\:bg-\\[\\#1a4270\\]:hover {
      background-color: #1d4ed8 !important;
      border-color: #60a5fa !important;
    }

    /* Sekundäre weiße Buttons -> Erhabene, tastbare Slate-Buttons */
    html.dark button.bg-white,
    html.dark a.bg-white,
    html.dark .touch-btn.bg-white {
      background-color: #273549 !important;
      border-color: #475569 !important;
      color: #f8fafc !important;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.35) !important;
    }
    html.dark button.bg-white:hover,
    html.dark a.bg-white:hover,
    html.dark .touch-btn.bg-white:hover,
    html.dark button.hover\\:bg-slate-50:hover,
    html.dark a.hover\\:bg-slate-50:hover {
      background-color: #334460 !important;
      border-color: #64748b !important;
      color: #ffffff !important;
    }

    /* Grüne Buttons (Speichern, Bestätigen, Positiv) */
    html.dark .bg-\\[\\#70C04D\\],
    html.dark button.bg-\\[\\#70C04D\\],
    html.dark a.bg-\\[\\#70C04D\\] {
      background-color: #16a34a !important;
      border-color: #22c55e !important;
      color: #ffffff !important;
      box-shadow: 0 2px 6px rgba(22, 163, 74, 0.4) !important;
    }
    html.dark .bg-\\[\\#70C04D\\]:hover,
    html.dark .hover\\:bg-\\[\\#5ea83e\\]:hover {
      background-color: #15803d !important;
    }

    /* Gold / Awards Buttons */
    html.dark .bg-\\[\\#E8C543\\],
    html.dark button.bg-\\[\\#E8C543\\],
    html.dark a.bg-\\[\\#E8C543\\] {
      background-color: #d97706 !important;
      border-color: #f59e0b !important;
      color: #ffffff !important;
      box-shadow: 0 2px 6px rgba(217, 119, 6, 0.4) !important;
    }
    html.dark .bg-\\[\\#E8C543\\]:hover,
    html.dark .hover\\:bg-\\[\\#d8b535\\]:hover {
      background-color: #b45309 !important;
    }

    /* Teal / PDF Buttons */
    html.dark .bg-\\[\\#3E8370\\] {
      background-color: #0f766e !important;
      border-color: #14b8a6 !important;
      color: #ffffff !important;
      box-shadow: 0 2px 6px rgba(15, 118, 110, 0.4) !important;
    }
    html.dark .bg-\\[\\#3E8370\\]:hover,
    html.dark .hover\\:bg-\\[\\#326a5b\\]:hover {
      background-color: #115e59 !important;
    }

    /* Indigo / Saison Beenden Buttons */
    html.dark .bg-\\[\\#43447D\\] {
      background-color: #4f46e5 !important;
      border-color: #6366f1 !important;
      color: #ffffff !important;
      box-shadow: 0 2px 6px rgba(79, 70, 229, 0.4) !important;
    }
    html.dark .bg-\\[\\#43447D\\]:hover,
    html.dark .hover\\:bg-\\[\\#343563\\]:hover {
      background-color: #4338ca !important;
    }

    /* Danger / Rote Löschen-Buttons */
    html.dark .bg-\\[\\#DE4341\\],
    html.dark button.bg-\\[\\#DE4341\\] {
      background-color: #dc2626 !important;
      border-color: #ef4444 !important;
      color: #ffffff !important;
      box-shadow: 0 2px 6px rgba(220, 38, 38, 0.4) !important;
    }
    html.dark .bg-\\[\\#DE4341\\]:hover,
    html.dark .hover\\:bg-\\[\\#c23634\\]:hover,
    html.dark .hover\\:bg-\\[\\#c93432\\]:hover {
      background-color: #b91c1c !important;
    }
    html.dark button.hover\\:bg-red-50,
    html.dark a.hover\\:bg-red-50,
    html.dark button.hover\\:bg-rose-50,
    html.dark a.hover\\:bg-rose-50 {
      background-color: #270909 !important;
      border-color: #7f1d1d !important;
      color: #fca5a5 !important;
    }
    html.dark button.hover\\:bg-red-50:hover,
    html.dark a.hover\\:bg-red-50:hover,
    html.dark button.hover\\:bg-rose-50:hover,
    html.dark a.hover\\:bg-rose-50:hover {
      background-color: #450a0a !important;
      border-color: #ef4444 !important;
      color: #fecaca !important;
    }

    /* Pin Stepper-Buttons (-1 / +1) */
    html.dark button.bg-slate-200,
    html.dark .bg-slate-200 {
      background-color: #334155 !important;
      border-color: #475569 !important;
      color: #f8fafc !important;
    }
    html.dark button.bg-slate-200:hover {
      background-color: #475569 !important;
    }

    /* Spieltag Spiel-Tabs (.tab-game) */
    html.dark .tab-game {
      background-color: #1e293b !important;
      color: #94a3b8 !important;
      border-color: #475569 !important;
    }
    html.dark .tab-game:hover {
      background-color: #334155 !important;
      color: #f1f5f9 !important;
    }
    html.dark .tab-game.bg-\\[\\#23548F\\] {
      background-color: #2563eb !important;
      color: #ffffff !important;
      border-color: #3b82f6 !important;
      box-shadow: 0 0 12px rgba(37, 99, 235, 0.4) !important;
    }

    /* 4. PIN-EINGABE & DISPLAY-FELDER */
    html.dark input[id^="pinInput_"],
    html.dark #opponentPinsInput {
      background-color: #0b1120 !important;
      color: #38bdf8 !important;
      border-color: #475569 !important;
      font-weight: 900 !important;
    }
    html.dark input,
    html.dark select,
    html.dark textarea {
      background-color: #0b1120 !important;
      color: #f8fafc !important;
      border-color: #475569 !important;
    }
    html.dark input:focus,
    html.dark select:focus,
    html.dark textarea:focus {
      border-color: #3b82f6 !important;
      box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3) !important;
      outline: none !important;
    }
    html.dark select option {
      background-color: #1e293b !important;
      color: #f8fafc !important;
    }

    /* 5. TEXTFARBEN & KONTRASTE FÜR WICHTIGE STELLEN */
    html.dark .text-slate-900,
    html.dark .text-slate-950,
    html.dark .text-black,
    html.dark .text-gray-900,
    html.dark .text-gray-950 {
      color: #f8fafc !important;
    }
    html.dark .text-slate-800,
    html.dark .text-gray-800 {
      color: #e2e8f0 !important;
    }
    html.dark .text-slate-700,
    html.dark .text-gray-700 {
      color: #cbd5e1 !important;
    }
    html.dark .text-slate-600,
    html.dark .text-slate-500,
    html.dark .text-gray-600,
    html.dark .text-gray-500 {
      color: #94a3b8 !important;
    }

    /* PaderBowler Vereinsblau: Strahlendes Sky-Blue für beste Lesbarkeit */
    html.dark .text-\\[\\#23548F\\] {
      color: #60a5fa !important;
    }
    /* Punkte & Erfolge: Frisches Frühlingsgrün */
    html.dark .text-\\[\\#70C04D\\],
    html.dark .text-\\[\\#2E4D11\\] {
      color: #4ade80 !important;
    }
    /* Bierframes, Awards & Goldene Werte */
    html.dark .text-\\[\\#E8C543\\],
    html.dark .text-\\[\\#85650d\\],
    html.dark .text-amber-950,
    html.dark .text-amber-900,
    html.dark .text-amber-800 {
      color: #fde047 !important;
    }
    /* Fehler & Niederlagen: Klares Korallrot */
    html.dark .text-\\[\\#DE4341\\],
    html.dark .text-\\[\\#c24e37\\],
    html.dark .text-\\[\\#DE9090\\],
    html.dark .text-red-950,
    html.dark .text-red-900,
    html.dark .text-red-800 {
      color: #f87171 !important;
    }
    /* Teal / Schnitte */
    html.dark .text-\\[\\#3E8370\\] {
      color: #2dd4bf !important;
    }
    /* Indigo / Spieltage */
    html.dark .text-\\[\\#43447D\\] {
      color: #a5b4fc !important;
    }
    /* Schnapszahl & Gutter Magenta */
    html.dark .text-\\[\\#A62F8B\\] {
      color: #f472b6 !important;
    }
    /* Split Terracotta */
    html.dark .text-\\[\\#9D5A47\\] {
      color: #fb923c !important;
    }

    /* 6. FARBLICH ABGESETZTE BADGES & STATUS-KACHELN */
    html.dark .bg-amber-50,
    html.dark .bg-amber-50\\/80,
    html.dark .bg-amber-100,
    html.dark .bg-\\[\\#E8C543\\]\\/20,
    html.dark .bg-\\[\\#E8C543\\]\\/15,
    html.dark .bg-\\[\\#E8C543\\]\\/10 {
      background-color: rgba(234, 179, 8, 0.16) !important;
      border-color: #f59e0b !important;
      color: #fde047 !important;
    }
    html.dark .bg-emerald-50,
    html.dark .bg-emerald-50\\/50,
    html.dark .bg-emerald-100,
    html.dark .bg-\\[\\#70C04D\\]\\/20,
    html.dark .bg-\\[\\#70C04D\\]\\/15,
    html.dark .bg-\\[\\#70C04D\\]\\/10 {
      background-color: rgba(34, 197, 94, 0.16) !important;
      border-color: #22c55e !important;
      color: #86efac !important;
    }
    html.dark .bg-red-50,
    html.dark .bg-red-50\\/40,
    html.dark .bg-red-100,
    html.dark .bg-\\[\\#DE4341\\]\\/15,
    html.dark .bg-\\[\\#DE4341\\]\\/20,
    html.dark .bg-\\[\\#DE4341\\]\\/10 {
      background-color: rgba(239, 68, 68, 0.16) !important;
      border-color: #ef4444 !important;
      color: #fca5a5 !important;
    }
    html.dark .bg-\\[\\#A62F8B\\]\\/15,
    html.dark .bg-\\[\\#A62F8B\\]\\/20 {
      background-color: rgba(217, 70, 239, 0.16) !important;
      border-color: #c084fc !important;
      color: #f0abfc !important;
    }
    html.dark .bg-\\[\\#9D5A47\\]\\/15,
    html.dark .bg-\\[\\#9D5A47\\]\\/20 {
      background-color: rgba(249, 115, 22, 0.16) !important;
      border-color: #f97316 !important;
      color: #fdba74 !important;
    }
    html.dark .bg-\\[\\#ED755D\\]\\/15,
    html.dark .bg-\\[\\#ED755D\\]\\/20 {
      background-color: rgba(244, 63, 94, 0.16) !important;
      border-color: #fb7185 !important;
      color: #fda4af !important;
    }
    html.dark .bg-\\[\\#3E8370\\]\\/15,
    html.dark .bg-\\[\\#3E8370\\]\\/20 {
      background-color: rgba(20, 184, 166, 0.16) !important;
      border-color: #14b8a6 !important;
      color: #5eead4 !important;
    }
    html.dark .bg-\\[\\#23548F\\]\\/10,
    html.dark .bg-\\[\\#23548F\\]\\/20 {
      background-color: rgba(59, 130, 246, 0.16) !important;
      border-color: #3b82f6 !important;
      color: #93c5fd !important;
    }

    /* 7. STRICHLISTEN-VERSCHLUSS & BANNER */
    html.dark #tallyLockNotice {
      background: linear-gradient(to right, #2a1604, #3b1c03) !important;
      border: 2px solid #d97706 !important;
      box-shadow: 0 4px 16px rgba(217, 119, 6, 0.25) !important;
    }
    html.dark #tallyLockNotice .bg-amber-200\\/80 {
      background-color: #451a03 !important;
      border-color: #f59e0b !important;
      color: #fde047 !important;
    }
    html.dark #secretLockBanner {
      background: linear-gradient(135deg, #1e1b4b 0%, #2a1604 100%) !important;
      border: 2px solid #f59e0b !important;
      box-shadow: 0 4px 18px rgba(245, 158, 11, 0.2) !important;
    }
    html.dark .mystery-award-card {
      background: linear-gradient(145deg, #1e293b 0%, #0f172a 100%) !important;
      border: 2px solid #ca8a04 !important;
      box-shadow: 0 4px 16px rgba(202, 138, 4, 0.2) !important;
    }

    /* 8. TABELLEN (ÜBERSICHTLICH & DEZENT GESTREIFT) */
    html.dark th {
      background-color: #0b1120 !important;
      color: #93c5fd !important;
      border-color: #334155 !important;
      font-weight: 800 !important;
    }
    html.dark td {
      border-color: #334155 !important;
      color: #f1f5f9 !important;
    }
    html.dark tbody tr:nth-child(even) {
      background-color: rgba(30, 41, 59, 0.45) !important;
    }
    html.dark tbody tr:hover {
      background-color: rgba(51, 65, 85, 0.55) !important;
    }

    /* 9. PDF-BERICHT: WEISSES DRUCKBLATT BEIBEHALTEN */
    html.dark .a4-page {
      background-color: #ffffff !important;
      color: #0f172a !important;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.75) !important;
      border-color: #475569 !important;
    }
    html.dark .a4-page * {
      color: inherit;
    }
    html.dark .a4-page .bg-white {
      background-color: #ffffff !important;
      color: #0f172a !important;
    }
    html.dark .a4-page .bg-slate-50,
    html.dark .a4-page .bg-slate-100 {
      background-color: #f8fafc !important;
      color: #0f172a !important;
    }
    html.dark .a4-page .text-slate-950,
    html.dark .a4-page .text-slate-900 {
      color: #0f172a !important;
    }
    html.dark .a4-page .text-slate-800 {
      color: #1e293b !important;
    }
    html.dark .a4-page .text-slate-700 {
      color: #334155 !important;
    }
    html.dark .a4-page .text-slate-600 {
      color: #475569 !important;
    }
    html.dark .a4-page .text-slate-500 {
      color: #64748b !important;
    }
    html.dark .a4-page .text-slate-400 {
      color: #94a3b8 !important;
    }
    html.dark .a4-page .text-blue-700 {
      color: #1d4ed8 !important;
    }
    html.dark .a4-page .text-emerald-700 {
      color: #047857 !important;
    }
    html.dark .a4-page .text-amber-700 {
      color: #b45309 !important;
    }
    html.dark .a4-page .text-red-700 {
      color: #b91c1c !important;
    }
    html.dark .a4-page .text-purple-700 {
      color: #7e22ce !important;
    }
    html.dark .a4-page .border-slate-200,
    html.dark .a4-page .border-slate-300 {
      border-color: #e2e8f0 !important;
    }
    html.dark .a4-page .border-slate-900 {
      border-color: #0f172a !important;
    }
    html.dark .a4-page tr.bg-slate-50\\/80 {
      background-color: #f1f5f9 !important;
    }
    html.dark .a4-page tr.bg-emerald-50\\/50 {
      background-color: #ecfdf5 !important;
    }
    html.dark .a4-page tr.bg-red-50\\/40 {
      background-color: #fef2f2 !important;
    }
  `;
  document.head.appendChild(style);
}

window.getPreferredTheme = getPreferredTheme;
window.applyTheme = applyTheme;
window.initTheme = initTheme;
window.toggleTheme = toggleTheme;
window.updateThemeToggleButtons = updateThemeToggleButtons;

if (typeof document !== 'undefined') {
  initTheme();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      injectDarkStyles();
      initTheme();
    });
  } else {
    injectDarkStyles();
    initTheme();
  }
}
