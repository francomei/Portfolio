< !DOCTYPE HTML >
    <html>
        <head>
            <link rel="stylesheet" type="text/css" href="style.css">
        </head>
        <body class="body">
            <main class="main">

                <title>Survey Form</title>

                <header class="header">
                    <div class="grid">
                        <div class="items">
                            <h1 id="title">Join to our football team!</h1>
                            <p id="description">Play with us completing this form</p>
                        </div>
                    </div>
                </header>
                <div class="container">
                    <div class="grid">
                        <div class="items">
                            <form id="survey-form" action="">
                                <div class="item">
                                    <label class="label" id="name-label" for="name">Name</label>
                                    <input class="form__input" id="name" name="name" type="text" placeholder="Name" required>

                                        <label class="label" id="email-label" for="email">Email</label>
                                        <input class="form__input" id="email" name="email" type="email" placeholder="Email" required>

                                            <label class="label" id="number-label" for="number">Age</label>
                                            <input class="form__input" id="number" name="number" type="number" placeholder="Number" min="6" max="21" required>
                                            </div>
                                            <div class="item">
                                                <p class="label">Which position you used to play?</p>
                                                <select class="form__select" name="" id="dropdown">
                                                    <option value="Goalkeeper">Goalkeeper</option>
                                                    <option value="Defender">Defender</option>
                                                    <option value="Midfield">Midfield</option>
                                                    <option value="Forward">Forward</option>
                                                </select>
                                            </div>
                                            <div class="item">
                                                <p class="label">Since when are you playing football?</p>
                                                <fieldset class="form__fieldset" name="radiobuttons">
                                                    <label for="" class="label">
                                                        <input class="radiobutton" type="radio" name="radiobuttons" value="1990" checked>1990
                                                    </label>
                                                    <label for="" class="label">
                                                        <input class="radiobutton" type="radio" name="radiobuttons" value="2000">2000
                                                    </label>
                                                    <label for="" class="label">
                                                        <input class="radiobutton" type="radio" name="radiobuttons" value="2010">2010
                                                    </label>
                                                </fieldset>
                                            </div>
                                            <div class="item">
                                                <fieldset class="form__fieldset" name="checkboxes">
                                                    <label class="label">What would you like to improve?</label>
                                                    <label for="" class="label">
                                                        <input type="checkbox" name="checkboxes" value="Head" checked>Head
                                                    </label>
                                                    <label for="" class="label">
                                                        <input type="checkbox" name="checkboxes" value="Jump">Jump
                                                    </label>
                                                    <label for="" class="label">
                                                        <input type="checkbox" name="checkboxes" value="FreeKick">Free Kick
                                                    </label>
                                                    <label for="" class="label">
                                                        <input type="checkbox" name="checkboxes" value="Dribling">Dribling
                                                    </label>
                                                    <label for="" class="label">
                                                        <input type="checkbox" name="checkboxes" value="Cardio">Cardio
                                                    </label>
                                                </fieldset>
                                            </div>
                                            <div class="item">
                                                <textarea name="" id="" cols="30" rows="10" class="textarea" placeholder="Let us a comment!"></textarea>
                                                <label class="label" for="submit"></label>
                                                <input class="form__submit" id="submit" name="submit" type="submit">
                                            </div>
                                        </form>
                                </div>
                        </div>
                    </div>
            </main>
        </body>
    </html>