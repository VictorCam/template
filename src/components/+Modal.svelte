<div class="modal hidden">
    <div class="pos-modal">
        <button
            class="svg-button"
            on:click|self={(e) => {
                let modal = e.target.parentElement.parentElement;
                modal.classList.add("hidden");
            }}><div class="close svg-bw" /></button
        >
        <div class="content"></div>
    </div>
</div>

<style>
    .modal {
        position: absolute;
        display: grid;
        z-index: 9999;
        background: rgba(0, 0, 0, 0.8);
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        justify-content: center;
        align-items: center;
    }
</style>
