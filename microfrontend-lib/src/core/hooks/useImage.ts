export const useImage = () => {

    const svgFiles = import.meta.glob('@assets/imgs/*.svg');

    return { authBgImage: svgFiles }
}