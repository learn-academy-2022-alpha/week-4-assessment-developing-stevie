# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'


    def number num
    if num == 0
     "num is 0"
    elsif num.odd?
         "#{num} is odd"
    else num.even?
         "#{num} is even"
    end
end
p number num1
p number num2
p number num3



#     p "#{num3} is even"
    # else 
    #     p "#{num3} is odd"
    # end


# if num.even? == true
#     then p "#{number} is even"
# else odd
#     then p "#{number} is odd"


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# define no_vowel(album1)
# album1 delete ("aeiouAEUOU")


def no_vowel string
    string.delete "aeiouAEIOU"
    end
   p no_vowel album1
   p no_vowel album2
   p no_vowel album3
  
  
   #  def no_vowel
#     no_vowel.delete "aeiouAEIOU"
#  p no_vowel
# end
# puts album
# deletes ("a","e","i","o")

# puts album1.delete("a","e","i","o")



# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forwards or backwards. Use the test variables provided.

is_palindrome1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
is_palindrome2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
is_palindrome3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'


# if needed convert to array
# take variable and attach reverse method
# if needed convert back to string
# check if reversed variable is == to variable
# if passes it is a plaindrome print "variable is palindrome"
# else prints "variable is not a palindrome"



def palindrome string
    word = string.downcase
    if word == word.reverse
         "#{word} is a palinrom"
    else  
        "#{word} is not a palinrom"
    end
end

p palindrome is_palindrome1
p palindrome is_palindrome2
p palindrome is_palindrome3


#------did code below first then needed to change to method

# if is_palindrome1.reverse == is_palindrome1
#     p "#{is_palindrome1} is a palindrome"
# else
#      p "#{is_palindrome1} is not a palindrome"
# end     