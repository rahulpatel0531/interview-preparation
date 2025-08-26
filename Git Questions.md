
🔹 1. git stash :
            git stash आपके current working directory (uncommitted changes) को temporary save कर देता है और working directory को साफ (clean) कर देता है।
            बाद में आप इन changes को git stash apply या git stash pop से वापस ला सकते हो।


            git stash: Uncommitted changes को अस्थायी रूप से save करता है ताकि branch switch कर सको।



🔹 2. git rebase :

          git rebase का use branches को update करने के लिए होता है। ये आपके commits को किसी दूसरे branch के ऊपर replay (re-apply) कर देता है।


git stash : Uncommitted changes को अस्थायी रूप से save करता है ताकि branch switch कर सको।
git rebase : एक branch के commits को दूसरे branch के ऊपर replay करता है ताकि linear history मिले।      




🔹 Question का मतलब  : "अगर आपने सुबह 10 बजे, 12 बजे, 2 बजे और 4 बजे commits किए, और आपको specifically 12 बजे वाले code पर वापस जाना है — तो कैसे करोगे?"

1. Commit History देखना : git log --oneline
2. उस commit का code देखने / switch करने के लिए : git checkout i7j8k9l
3. अगर permanent वापस जाना है (branch को उस commit पर reset करना है) :  # ⚠ सावधानी से इस्तेमाल करो, ये future commits हटा देगा git reset --hard i7j8k9l

4. अगर सिर्फ उस commit से नया branch बनाना है : git checkout -b old-code i7j8k9l
🔹 Extra: अगर code सिर्फ देखना है (बिना switch किए) : git show i7j8k9l

