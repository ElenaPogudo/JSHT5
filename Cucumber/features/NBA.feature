Feature: Tests "https://stats.nba.com/"

  Background: Open Players Home and go back to Home Page
    Given I open "https://stats.nba.com/"
    When I click link "LeftMenuButton"
    And I click link "Players"
    And I click link "PlayersHome"
    And I click link "HomePage"


  Scenario Outline: Take a look at the best team of season and its achievements
    When I click link "Teams"
    And I click link "SeasonLeaderByPointsPerGame"
    And I click link "Profile"
    And I click link "Tracking"
    Then I should see that "<Field>" equal "<FieldValue>"

    Examples:
      | Field      | FieldValue |
      | TotalsGP   | 82         |
      | TotalsFREQ | 100%       |
      | TotalsFGM  | 42.7       |


  Scenario:
    When I click link "AllTimeLeaders"
    And I click link "AllTimeSummary"
    And I click link "General"
    Then I should see that "BestPlayerName" equal "James Harden"







