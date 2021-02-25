const formatVolumeIconPath = require('../assets/scripts/main');

describe('Volume Icon Path', () => {
    test('Volume Over 66', () => {
        expect(formatVolumeIconPath(67)).toMatch("3");
    });

    test('Volume Over 33', () => {
        expect(formatVolumeIconPath(34)).toMatch("2");
    });

    test('Volume Over 0', () => {
        expect(formatVolumeIconPath(1)).toMatch("1");
    });

    test('Volume Else Statement', () => {
        expect(formatVolumeIconPath(-1)).toMatch("0");
    });
});