# Pickleball

Phone-first point tracking. Names, the current game, and completed game history are stored locally in this browser. Closing the app preserves saved data; clearing browser data removes it. No cloud sync or backup export.

Tap History or swipe right to browse completed games; tap Game or swipe left to return. Selecting a historical game does not replace the current game. Each completed game saves once, with full names, completion time, score, and point breakdown. The previous version's latest completed game is retained as Undated because it did not record dates.

Stats show Me, partner, and Team. Unclear points and opponents remain separate. History shows only your winners, UE and BSS.

Open index.html using a static web server. No build or external dependencies. Run `node test.cjs` for outcome and archive tests.

The opening home screen offers New game, History and Today's stats. History groups games by the phone's local calendar date, with daily totals for Me and each named partner, and both players' stats on each game row. Today's stats filters the same view to today. Unclear points and opposing-team entries do not count toward individual totals. Home and History offer Resume game while a game is unfinished. History has All games and Today tabs. Page navigation provides Home, contextual Back, and New game or Resume game.
