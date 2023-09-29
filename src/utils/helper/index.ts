export const _class = (classString: string = '') => {
    const classes = classString.split(' ').filter(Boolean);
    return classes.join(' ');
}
