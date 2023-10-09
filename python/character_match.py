# Don't forget to run the tests (and create some of your own)

# Part 1
def is_character_match(string1, string2):
	str1_dict = {}

	for letter in string1.lower():
		str1_dict[letter] = str1_dict.get(letter, 0) + 1
	for letter in string2.lower():
		if letter not in str1_dict:
			return False
		else:
			str1_dict[letter]-=1
	for letter in str1_dict:
		if str1_dict[letter] > 0:
			return False
	return True


# Part 2
def anagrams_for(word, list_of_words):
	answer =[]
	for word_in_list in list_of_words:
		if is_character_match(word, word_in_list):
			answer.append(word_in_list)
	return answer
