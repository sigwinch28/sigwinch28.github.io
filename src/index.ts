enum FateValue {
  Accepted = "accepted",
  Tempted = "tempted",
}
const storageKey = "fate";

const setFateValue = (fateValue: FateValue) => {
  localStorage.setItem(storageKey, fateValue);
};

const getFateValue = (): FateValue | undefined => {
  const value = localStorage.getItem(storageKey);
  if (Object.values(FateValue).includes(value as FateValue)) {
    return value as FateValue;
  }
};

const banner = document.getElementById("annoying-banner");
const acceptButton = document.getElementById("accept-fate");
const invisibleClassName = "invisible";

const showBanner = () => {
  acceptButton?.addEventListener("click", acceptFate, { once: true });
  banner?.classList.remove(invisibleClassName);
};

const hideBanner = () => {
  banner?.classList.add(invisibleClassName);
  acceptButton?.removeEventListener("click", acceptFate);
};

const temptFate = () => {
  setFateValue(FateValue.Tempted);
  showBanner();
};

const acceptFate = () => {
  setFateValue(FateValue.Accepted);
  hideBanner();
};

document.getElementById("tempt-fate")?.addEventListener("click", temptFate);

console.log(getFateValue());
if (getFateValue() == FateValue.Tempted) {
  showBanner();
}
