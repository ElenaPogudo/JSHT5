class chairsPageObject {

    constructor() {
        this.elements = {
            // elements for chairsPage
            LeftMenuButton: 'div.nav-inner__menu-button',
            Players: 'body > main > nav > section > div:nth-child(15) > h4',
            PlayersHome: 'body > main > nav > section > section:nth-child(16) > ul > li:nth-child(1) > a',
            HomePage: 'body > main > div.nav-container > div > nav > div:nth-child(2) > a',

            Teams: 'div.nav-inner__menu-item > a[href="/teams/"]',
            SeasonLeaderByPointsPerGame: 'td.category-table__text > a',
            Profile: 'div.toggle-nav-component__button > a',
            Tracking: 'body > main > div.stats-container__inner > div > div > div.row > div > nav-dropdown > nav > section:nth-child(2) > ul > li:nth-child(6) > a > span',
            TotalsGP: 'body > main > div.stats-container__inner > div > div > div.row > div > div > div > nba-stat-table:nth-child(8) > div.nba-stat-table > div.nba-stat-table__overflow > table > tbody > tr:nth-child(1) > td:nth-child(2)',
            TotalsFREQ: 'body > main > div.stats-container__inner > div > div > div.row > div > div > div > nba-stat-table:nth-child(8) > div.nba-stat-table > div.nba-stat-table__overflow > table > tbody > tr:nth-child(1) > td:nth-child(3)',
            TotalsFGM: 'body > main > div.stats-container__inner > div > div > div.row > div > div > div > nba-stat-table:nth-child(8) > div.nba-stat-table > div.nba-stat-table__overflow > table > tbody > tr:nth-child(1) > td:nth-child(4)',

            AllTimeLeaders: 'div.nav-inner__menu-item > a[href="/alltime/"]',
            AllTimeSummary: 'a[ng-class="{ active: showBeta }"]',
            General: 'a[data-type-beta="general"]',
            BestPlayer: 'div.nba-stat-table__overflow > table > tbody > tr[index="0"]',
            BestPlayerName:'div.nba-stat-table__overflow > table > tbody > tr[index="0"] > td[class="player"]'

        };
    }
}

module.exports = new chairsPageObject();