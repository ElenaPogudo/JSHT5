Feature: Tests "https://stats.nba.com/"

  Background: User is Logged In
    Given I open "https://stats.nba.com/"
    When I click link "LeftMenuButton"
    And I click link "Players"
    And I click link "PlayersHome"
    And I fill "SearchField" with "playerName"
    And I click link "Search"

    And I click link "HomePage"
    Then I should see that "TextInLoginForm" equal "My Account"

  Scenario: Open page of some sofa and make sure if has right default values
    When I click link "ShopNowLink"
    And I click link "FirstElementOfProducts"
    Then I should see that "SofaColor" equal "Light Silver"
    And I see "AllParameters"


  Scenario Outline: Add two products to the cart and compare prices
    When I click link "LivingLink"
    And I click link "ChairsLink"
    And I click link "<product>"
    And I click link "AddToCart"
    And I click link "Cart"
    Then I should see that "PriceInCart" equal "<finalPrices>"

    Examples:
      | product      | finalPrices |
      | First Chair  | $295.00     |
      | Second Chair | $375.00     |


