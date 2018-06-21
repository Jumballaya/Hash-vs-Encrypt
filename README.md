# Hashing vs Encrypting

## Hashing

 Hashing is a 1-way process, meaning that something that is hashed cannot be unhashed
 by going backward through the process like encryption.

 When you hash data it turns it into data that looks wildly different in comparison.
 Hashing is used for a wide-variety of problems ranging from password storage to ensuring
 that a file hasn't changed since it was last checked by hashing the data regularly and checking
 the differences.

 Example:

    `plaintext data` -> `hashing_algorithm` -> `hash data`


 You can imagine a simple hashing algorithm that gets the corresponding number for each letter
 in the plaintext data and then adds all of the numbers together and returns a very large number.
 On larger files this number can overflow real quick and break our program, so we have to keep
 the number manageble.

 Example, password

    `pass` -> [p=15, a=0, s=18, s=18] = (15+0+18+18) -> 51

 We hashed the password `pass` as `55` so if anyone enters, say `password` they wouldn't get 55.
 Hashing is also more secure when you hashed to fixed sizes rather than letter the hash get as
 big as it can. This makes the hash more secure because the password could be 10 letters long or
 the entire anthology of Steven King and the hash would be the same amount of characters.

## Encrypting/Decrypting

 Encryption is a two-way process where some data, like a string, can be converted
 into different looking data, like another string or numbers. This different looking
 data is called the encrypted data and the original data is the plaintext data. The encrypted
 data can be ran backwards through the encryption process to produce the plaintext data.

 This looks like this:

  Encrypt:
    `plaintext data` -> `encryption_algrorithm` -> `encrypted data`

  Decrypt:
    `encrypted data` -> `decryption_algrorithm` -> `plaintext data`

 One of the most basic encryption techniques is called the [caesar cypher](https://en.wikipedia.org/wiki/Caesar_cipher)
 and it encrypts the plaintext string by first turning each letter into a corresponding number,
 a=0 b=1 etc., the next step involves adding a number to each of the converted letters and
 wrapping around back to 'a' after we pass 'z'

 The most popular use of a caesar cypher is a system called ROT13, or rotated by 13, where we use
 13 as our number to add to each letter.
 Using our example of encryption above we can see what ROT13 looks like with the word 'cat':

  CAT -> [C=2, A=0, T=19] +13 = [15=P, 13=N, (32-26=6)=G] -> PNG

  As you can see we put in 'CAT' as plaintext and get 'PNG' out as our encrypted data.
  The two-way part comes into play when we want to send our encrypted message to a friend.
  If they want to understand your message they will have to decrypt it using the same technique
  but in reverse. Remember to wrap back to 'z' if we go under 'a'.

  PNG -> [P=15, N=13, G=6] -13 = [2=C, 0=A, (-7+26=19)=T] -> CAT
