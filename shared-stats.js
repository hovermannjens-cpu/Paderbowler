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

// 2. Offizieller WBU-Mitgliederbestand des Vereins (Pader-Bowler-2006 e.V., Saison 2026/2027)
var CLUB_MEMBERS_WBU = [
  { id: "player_ploewka", name: "Pascal Ploewka", nickname: "", email: "", edv: "21452" },
  { id: "player_baumeister", name: "Gerrit Baumeister", nickname: "", email: "gerrit@paderbowler.de", edv: "24743" },
  { id: "player_hatzig", name: "Pascal Hatzig", nickname: "Kalle", email: "kalle@paderbowler.de", edv: "36536" },
  { id: "player_poguntke", name: "Andre Poguntke", nickname: "", email: "", edv: "40969" },
  { id: "player_mueller", name: "Andrè Müller", nickname: "", email: "", edv: "24454" },
  { id: "player_pfaffenrot", name: "Waldemar Pfaffenrot", nickname: "", email: "", edv: "40967" },
  { id: "player_gerdhenrich", name: "Gary Gerdhenrich", nickname: "", email: "gary@paderbowler.de", edv: "36514" },
  { id: "player_mandel", name: "Dennis Mandel", nickname: "", email: "", edv: "40488" },
  { id: "player_klipenstein", name: "Andre Klipenstein", nickname: "Olaf", email: "olaf@paderbowler.de", edv: "40966" },
  { id: "player_hoppe", name: "Joachim Hoppe", nickname: "Jo", email: "jo@paderbowler.de", edv: "36535" },
  { id: "player_kaeune", name: "Rüdiger Käune", nickname: "", email: "", edv: "24752" },
  { id: "player_d_hoffmann", name: "Dustin Hoffmann", nickname: "", email: "", edv: "40300" },
  { id: "player_nowatzky", name: "Nils Nowatzky", nickname: "", email: "", edv: "40301" },
  { id: "player_dreier", name: "Marek Dreier", nickname: "", email: "", edv: "40370" },
  { id: "player_burshile", name: "Dirk Burshile", nickname: "", email: "", edv: "40428" },
  { id: "player_stoewer", name: "Marvin Stöwer", nickname: "", email: "marvin@paderbowler.de", edv: "40487" },
  { id: "player_engemann", name: "Peter Engemann", nickname: "", email: "", edv: "20259" },
  { id: "player_seifert", name: "Sven Seifert", nickname: "", email: "", edv: "40302" },
  { id: "player_vogt", name: "Lucas Vogt", nickname: "", email: "", edv: "40516" },
  { id: "player_m_hoffmann", name: "Marvin Hoffmann", nickname: "", email: "", edv: "40519" },
  { id: "player_dutkowski", name: "André Dutkowski", nickname: "", email: "", edv: "40307" },
  { id: "player_bronnikow", name: "Leon Bronnikow", nickname: "", email: "", edv: "40517" },
  { id: "player_beiersdoerfer", name: "Armin Beiersdörfer", nickname: "", email: "", edv: "40518" }
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

  // 2. Vereinsmitglieder abgleichen (alle 23 WBU-Spieler)
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
  teams: JSON.parse(JSON.stringify(INITIAL_TEAMS))
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
 * Löst das Gegner-Objekt oder einen Gegner-Bezeichner in den echten Mannschaftsnamen auf.
 * Verhindert generische Texte wie "Gegner 1" oder "opp_detmold".
 */
function resolveOpponentName(oppObj, team = null, gameIdx = 1) {
  if (!oppObj) {
    if (team?.opponents && team.opponents[gameIdx - 1]) {
      return team.opponents[gameIdx - 1];
    }
    return `Gegner ${gameIdx}`;
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

  if (team?.opponents && team.opponents[gameIdx - 1]) {
    return team.opponents[gameIdx - 1];
  }

  return rawName || rawId || `Gegner ${gameIdx}`;
}
window.resolveOpponentName = resolveOpponentName;

// Lädt den globalen App-Zustand aus localStorage
function getAppState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && Array.isArray(parsed.teams) && parsed.teams.length > 0) {
        const changed = syncClubState(parsed);
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
 * Unterstützt eine einzelne Saison, 'all' für alle Saisons oder ein Array von Saison-IDs.
 */
function calculateClubWidePlayerStats(seasonId = null, appState = null) {
  const state = appState || getAppState();
  let seasonTeams = [];
  if (!seasonId || seasonId === 'all') {
    seasonTeams = state.teams;
  } else if (Array.isArray(seasonId)) {
    seasonTeams = state.teams.filter(t => seasonId.includes(t.seasonId));
  } else {
    seasonTeams = state.teams.filter(t => t.seasonId === seasonId);
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
    const local = getAppState();
    const deletedIds = local.deletedTeamIds || (data.hub ? data.hub.deletedTeamIds : []) || [];

    if (data.hub && Array.isArray(data.hub.teams) && data.hub.teams.length > 0) {
      data.hub.deletedTeamIds = deletedIds;
      syncClubState(data.hub);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data.hub));
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

    cloudDb.collection('clubs').doc('paderbowler_stats').set(payload)
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
