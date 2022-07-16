const mesureWidth = itemMenu => {
    let reqItemWidth = 0;
    const screenWidth = $(window).width();
    const containerMenu = itemMenu.closest(".products-menu");
    const titlesBlocks = containerMenu.find(".products-menu__title");
    const titlesWidth = titlesBlocks.width() * titlesBlocks.length;

    const textContainer = itemMenu.find(".products-menu__container");
    const paddingLeft = parseInt(textContainer.css("padding-left"));
    const paddingRight = parseInt(textContainer.css("padding-right"));

    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (isMobile) {
        reqItemWidth = screenWidth - titlesWidth;
    } else {
        reqItemWidth = 500;
    }

    return {
        container: reqItemWidth,
        textContainer: reqItemWidth - paddingLeft - paddingRight
    }
};

const closeEveryItemInContainer = containerMenu => {
    const itemMenu = containerMenu.find(".products-menu__item");
    const contentMenu = containerMenu.find(".products-menu__content");

    itemMenu.removeClass("active-menu");
    contentMenu.width(0);
};

const openItemMenu = itemMenu => {
    const hiddenContent = itemMenu.find(".products-menu__content");
    const reqWidth = mesureWidth(itemMenu);
    const textBlock = itemMenu.find(".products-menu__container");

    itemMenu.addClass("active-menu");
    hiddenContent.width(reqWidth.container);
    textBlock.width(reqWidth.textContainer);
};

$(".products-menu__title").on("click", e => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const itemMenu = $this.closest(".products-menu__item");
    const itemOpened = itemMenu.hasClass("active-menu");
    const containerMenu = $this.closest(".products-menu");

    if (itemOpened) {
        closeEveryItemInContainer(containerMenu);
    } else {
        closeEveryItemInContainer(containerMenu);
        openItemMenu(itemMenu);
    }
    
});

$(".products-menu__close").on("click", e => {
    e.preventDefault();

    closeEveryItemInContainer($(".products-menu"));
});