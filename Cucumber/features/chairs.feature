Feature: Tests store.hermanmiller.com

  Background: User is Logged In
    Given I navigate to the main page
    When I push log in, fill user name and password and submit
    Then I should be logged in

  #Scenario: Navigate to a product and add the same to the User basket
  #  Given User navigate for Lenovo Laptop
  #  When Add the laptop to the basket
  #  Then User basket should display with added item

  Scenario Outline: Search a product and add the first product to the User basket
    When I go to the living link and choose chairs
    When I add "<positions>" chairs to the cart
    Then I see "<finalPrices>" in cart

    Examples:
      | positions | finalPrices |
      | 1         | $295.00     |
      | 2         | $640.00     |


