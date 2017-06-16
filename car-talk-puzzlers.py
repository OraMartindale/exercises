from collections import defaultdict
import math
import os
from textwrap import dedent
import urllib

WORDS_FILE_NAME = 'words.txt'

def find_consecutive_letter_pairs():
    """
    From http://www.cartalk.com/content/puzzlers via
    http://greenteapress.com/thinkpython/html/thinkpython010.html:

    Give me a word with three consecutive double letters. I'll give you a couple
    of words that almost qualify, but don't. For example, the word committee,
    c-o-m-m-i-t-t-e-e. It would be great except for the 'i' that sneaks in
    there. Or Mississippi: M-i-s-s-i-s-s-i-p-p-i. If you could take out those
    i's it would work. But there is a word that has three consecutive pairs of
    letters and to the best of my knowledge this may be the only word. Of course
    there are probably 500 more but I can only think of one.

    What is the word?
    """

    print dedent(find_consecutive_letter_pairs.__doc__)
    for word in _get_word_list():
        if len(word) >= 6:
            matches = 0
            skip_next_letter = False
            go_to_next_word = False
            for i, letter in enumerate(word):
                if skip_next_letter:
                    skip_next_letter = False
                    continue
                if (i+1) < len(word):
                    if letter == word[i+1]:
                        matches += 1
                        skip_next_letter = True
                    elif matches > 0:
                        go_to_next_word = True
                        break
            if matches == 3:
                print word
            elif go_to_next_word:
                continue

def find_cooincidental_palindromes():
    """
    From http://www.cartalk.com/content/puzzlers via
    http://greenteapress.com/thinkpython/html/thinkpython010.html:

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

    outerBreak = False
    for six_digit_number in _generate_palindrome_of_x_digits(6):
        six_digit_number_as_int = int_(six_digit_number)
        for four_digit_number in _generate_palindrome_of_x_digits(4):
            if all((six_digit_number_as_int - 3 == int_('{}{}'.format(six_digit_number[:2], four_digit_number)),
                   _is_palindrome(str_(six_digit_number_as_int - 2)[1:]),
                   _is_palindrome(str_(six_digit_number_as_int - 1)[1:-1]),
                    )):
                outerBreak = True
                break
        if outerBreak:
            break

    print dedent(find_cooincidental_palindromes.__doc__)
    print six_digit_number_as_int - 3
    print 'Your odometer then read {}, {} and {}.'.format(
        six_digit_number_as_int - 2,
        six_digit_number_as_int - 1,
        six_digit_number_as_int
    )

def find_how_old_i_am():
    """
    From http://www.cartalk.com/content/puzzlers via
    http://greenteapress.com/thinkpython/html/thinkpython010.html:

    Recently I had a visit with my mom and we realized that the two digits
    that make up my age when reversed resulted in her age. For example, if she's
    73, I'm 37. We wondered how often this has happened over the years but we
    got sidetracked with other topics and we never came up with an answer.

    When I got home I figured out that the digits of our ages have been
    reversible six times so far. I also figured out that if we're lucky it would
    happen again in a few years, and if we're really lucky it would happen one
    more time after that. In other words, it would have happened 8 times over
    all. So the question is, how old am I now?
    """

    age_diff_lookup = defaultdict(list)
    min_age_diff_we_will_consider = 10
    i = 1
    while True:
        current_number = str(i).zfill(2)
        age_diff = int(current_number[::-1]) - i
        if age_diff > min_age_diff_we_will_consider:
            age_diff_lookup[age_diff].append((current_number, current_number[::-1]))
            if len(age_diff_lookup[age_diff]) == 8:
                your_age, your_moms_age = age_diff_lookup[age_diff][5]
                print dedent(find_how_old_i_am.__doc__)
                print 'Your age is {} and your mom is {}'.format(
                    your_age,
                    your_moms_age
                )
                break
        i += 1
        if i > 10000:
            print 'Stopped the loop before this gets out of hand.'
            break

def _is_palindrome(word):
    return word == word[::-1]

def _generate_palindrome_of_x_digits(number_of_digits):
    half_the_digits = int(math.ceil(number_of_digits / 2.0))
    if number_of_digits % 2 == 0:
        first_half_of_number_slice = slice(0, half_the_digits)
    else:
        first_half_of_number_slice = slice(0, half_the_digits - 1)
    for num in xrange(10 ** half_the_digits):
        first_half_of_number = '{0:0>{1}}'.format(num, half_the_digits)
        yield '{0}{1}'.format(first_half_of_number, first_half_of_number[first_half_of_number_slice][::-1])

def _get_word_list():
    if not os.path.isfile(WORDS_FILE_NAME):
        _get_word_file()

    with open(WORDS_FILE_NAME, 'r') as f:
        return [line.strip() for line in f]

def _get_word_file():
    filehandle = urllib.urlopen('http://www.greenteapress.com/thinkpython/code/words.txt')
    with open(WORDS_FILE_NAME, 'w') as f:
        for line in filehandle:
            f.write(line)

if __name__ == '__main__':
    find_consecutive_letter_pairs()
