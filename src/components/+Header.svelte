<header>
    <div class="svg-bw tmp" />
    <button
        on:click|self={(e) => {
            let burger = e.target.children[0];
            burger.classList.toggle("close");
            burger.classList.toggle("burger");
        }}
        class="svg-button"
        aria-label="Hamburger Menu"
    >
        <div class="svg-bw burger" />
    </button>
    <nav>
        <ul>
            <li><a href="#Link1">Link1</a></li>
            <li><a href="#Link2">Link2</a></li>
        </ul>
    </nav>
</header>

<style>
    header {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 5px;
    }

    button {
        margin-left: auto;
        background: none;
        border: none;
    }

    ul {
        display: flex;
        flex-direction: row;
        gap: 10px;
    }

    nav {
        margin-right: 10px;
    }

    .tmp {
        padding: 10px;
    }
</style>
