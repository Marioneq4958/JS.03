# Moje zadania (`INF.03-02-25.06-SG`)

Dla fragmentu strony utwórz skrypt, którego wymagania opisano poniżej.

- Napisany w języku JavaScript i działający na liście punktowanej
- Należy stosować znaczące nazewnictwo zmiennych i funkcji w języku polskim lub angielskim
- Dla uproszczenia należy założyć, że w stanie początkowym jest 6 elementów listy, elementy mogą być dodawane, ale nie są usuwane
- Działanie funkcji wywoływanej po wciśnięciu dowolnego z przycisków „Wykonane”:
  - Przekreśla treść elementu listy związanego z tym przyciskiem. Na ilustracji 4 pokazano efekt wciśnięcia przycisku „Wykonane” w drugim elemencie listy. W wyniku tego tekst „Gimnastyka” został przekreślony
- Działanie funkcji wywoływanej po wciśnięciu przycisku „Dodaj”:
  - Tworzy nowy element listy na jej końcu. Element składa się z
    - Treści pobranej z pola edycyjnego
    - Przycisku o treści „Wykonane”, który jest formatowany tak jak reszta przycisków w liście i jego kliknięcie powoduje wywołanie odpowiedniej funkcji
  - Na ilustracji 4 pokazano efekt wciśnięcia przycisku Dodaj. Został utworzony nowy element listy „Lekarz” wraz z przyciskiem „Wykonane”. Wybranie utworzonego przycisku spowoduje wykonanie skryptu dla elementu listy „Lekarz”

**Tabela 3. Tworzenie elemenów w JavaScript**

Example\
Create a \<p\> element and append it to the document:

```
const para = document.createElement("p");
para.innerText = "This is a paragraph";
para.className = "nazwaKlasyCSS";
document.body.appendChild(para);
```

Example\
Append an item to a list:

```
const node = document.createElement("li");
/* add text, classes and attributes */
document.getElementById("idListy").appendChild(node);
```

<br>

<center>
<img src="./content-assets/preview.png" alt="Podgląd">

**Ilustracja 4. Działanie aplikacji**
</center>

<details class="source-info">
<summary>Źródła i dodatkowe informacje</summary>

> **Źródła**: Wymagania dotyczące skryptu (w formie listy punktowanej) oraz tabela 3 i ilustracja 4 są fragmentem arkusza `INF.03-02-25.06-SG` dostępnego m.in. pod adresem <https://chr1skyy.github.io/Egzamin-Zawodowy-E14-EE09-INF03/inf03/inf03_2025_06_02/inf_03_2025_06_02_SG.pdf>. Szablon, przykładowa odpowiedź oraz testy zostały przygotowane na potrzeby platformy.

> **Wskazówka do testów:** Dla poprawnego działania testów, należy nie usuwać/zmieniać identyfikatorów `dodaj-pole`, `dodaj-przycisk`, `lista`.

</details>
