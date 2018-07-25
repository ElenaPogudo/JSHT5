Feature: Tests "store.hermanmiller.com"

  Background: User is Logged In
    Given I navigate to the main page
    When I push log in, fill user name and password and submit
    Then I should be logged in

  Scenario: Open page of some sofa and make sure if has right default values
    When I go to shop now link
    And Choose first sofa
    Then I see its lite silver color and walnut legs by default
    And I see all parameters


  Scenario Outline: Add two products to the cart and compare prices
    When I go to the living link and choose chairs
    And I add "<positions>" chairs to the cart
    Then I see "<finalPrices>" in cart

    Examples:
      | positions | finalPrices |
      |     1     |   $295.00   |
      |     2     |   $640.00   |


