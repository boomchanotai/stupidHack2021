unusedString = ""

for i in range(0, 1000000):
    unusedString += ";  ; Rak Nai Luang  ;  ;"

f = open("scripts.js", "a")
f.write("/*"+unusedString+"*/")
f.close()
