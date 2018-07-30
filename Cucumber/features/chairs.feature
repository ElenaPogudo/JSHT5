Feature: Tests "store.hermanmiller.com"

  Background: User is Logged In
    Given I open "store.hermanmiller.com"
    When I click link "Login Button"
    And I fill "Username Field" with "name"
    And I fill "Password Field" with "password"
    And I click link "Submit Login Button"
    And I click link "Home Page"
    Then I should see that "Text in login form" equal "My Account"

  Scenario: Open page of some sofa and make sure if has right default values
    When I click link "Shop Now Link"
    And I click link "First Element Of Products"
    Then I should see that "Sofa Color" equal "Light Silver"
    And I see "All Parameters"


  Scenario Outline: Add two products to the cart and compare prices
    When I click link "Living Link"
    And I click link "Chairs Link"
    And I click link "<product>"
    And I click link "Add To Cart"
    And I click link "Cart"
    Then I should see that "Price In Cart" equal "<finalPrices>"

    Examples:
      | product      | finalPrices |
      | "First Chair"  | $295.00     |
      | "Second Chair" | $375.00     |


