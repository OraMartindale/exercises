def is_palindrome(word):
    return word == word[::-1]

def find_cooincidental_palindromes():
    """
        From http://www.cartalk.com/content/puzzlers:
        I was driving on the highway the other day and I happened to notice my
        odometer. Like most odometers, it shows six digits, in whole miles
        only. So, if my car had 300,000 miles, for example, I'd see
        3-0-0-0-0-0.

        Now, what I saw that day was very interesting. I noticed that the last
        4 digits were palindromic; that is, they read the same forward as
        backward. For example, 5-4-4-5 is a palindrome, so my odometer could
        have read 3-1-5-4-4-5.

        One mile later, the last 5 numbers were palindromic. For example, it
        could have read 3-6-5-4-5-6. One mile after that, the middle 4 out of 6
        numbers were palindromic. And you ready for this? One mile later, all 6
        were palindromic!

        The question is, what was on the odometer when I first looked?
    """

    # We're going create local variables for the commonly used functions. This
    # is for faster lookups:
    str_ = str
    int_ = int

    for six_digit_number in _generate_palindrome_of_x_digits(6):
        six_digit_number_as_int = int_(six_digit_number)
        for four_digit_number in _generate_palindrome_of_x_digits(4):
            if all((six_digit_number_as_int - 3 == int_('{}{}'.format(six_digit_number[:2], four_digit_number)),
                   is_palindrome(str_(six_digit_number_as_int - 2)[1:]),
                   is_palindrome(str_(six_digit_number_as_int - 1)[1:-1]),
                    )):
                print six_digit_number_as_int-3, six_digit_number_as_int-2, six_digit_number_as_int-1, six_digit_number_as_int

def _generate_palindrome_of_x_digits(number_of_digits):
    half_the_digits = number_of_digits / 2
    for num in xrange(10 ** half_the_digits):
        first_three_numbers = '{0:0>{1}}'.format(num, half_the_digits)
        yield '{0}{1}'.format(first_three_numbers, first_three_numbers[::-1])


if __name__ == '__main__':
    find_cooincidental_palindromes()
