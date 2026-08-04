# Generowanie ciągu arytmetycznego (`EE.09-05-19.06`)

Dla fragmentu strony utwórz skrypt, którego wymagania opisano poniżej.

- Skrypt jest wykonywany po stronie przeglądarki.
- Zadaniem jest wyświetlenie wyrazów ciągu arytmetycznego o podanym pierwszym wyrazie, różnicy ciągu i liczbie wyrazów
- Skrypt uruchamia się po wciśnięciu przycisku [...]
- Po uruchomieniu skrypt pobiera wartości z trzech pól edycyjnych. Wartości powinny być liczbami naturalnymi. Nie jest wymagane, aby skrypt sprawdzał poprawność danych
- Przykład: dla danych: wyraz początkowy = 40; różnica = 3; liczba wyrazów w ciągu = 9, wyrazami ciągu są: 40, 43, 46, 49, 52, 55, 58, 61, 64 (zaczynają się od 40, co 3, łącznie jest ich 9)
- Skrypt wyświetla wynik działania pod przyciskiem według wzoru: „Ciąg arytmetyczny zawiera wyrazy: \<wyraz1\>, \<wyraz2\>, …, \<wyraz_n\>", gdzie \<wyraz1\>… to kolejne wyrazy ciągu

**Definicje matematyczne**

_Ciąg liczbowy a<sub>n</sub> nazywamy arytmetycznym, jeśli dla pewnej liczby r zwanej różnicą ciągu zachodzi:_

_<center>a<sub>n+1</sub> = a<sub>n</sub> + r</center>_

_Wzór na n-ty wyraz ciągu arytmetycznego (a<sub>n</sub>) o pierwszym wyrazie a<sub>n</sub> i różnicy r:_

_<center>a<sub>n</sub> = a<sub>1</sub> + (n-1)r</center>_

<details class="source-info">
<summary>Źródła i dodatkowe informacje</summary>

> **Źródła**: Wymagania dotyczące skryptu (w formie listy punktowanej) oraz sekcja "Definicje matematyczne" są fragmentem arkusza `EE.09-05-19.06` dostępnego m.in. pod adresem <https://chr1skyy.github.io/Egzamin-Zawodowy-E14-EE09-INF03/ee09/ee09_2019_06_05/ee_09_2019_06_05.pdf>. Szablon, przykładowa odpowiedź oraz testy zostały przygotowane na potrzeby platformy.

> **Wskazówka do testów:** Dla poprawnego działania testów, należy nie usuwać/zmieniać identyfikatorów `a1`, `r`, `n`, `przycisk`, `wynik`. **Wynik działania skryptu umieść w akapicie o id `wynik`.**

</details>
