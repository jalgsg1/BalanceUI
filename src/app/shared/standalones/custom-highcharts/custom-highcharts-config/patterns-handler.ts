export class PatternsHandler {
  
  private GENERIC_PATTERNS_1: string[] = [
    'M 10 0 L 0 10',
    'M 0 0 L 6 6 M 5 -1 L 7 1 M -1 5 L 1 7',
    'M 10 0 L 0 10 M 10 10 L 0 0 M 10 5 L 0 5 M 5 10 L 5 0',
    'M 0 0 L 10 10 M 10 0 L 0 10',
    'M 0 0 L 10 0 M 0 5 L 10 5 M 0 10 L 10 10',
    'M 0 0 L 0 10 M 5 0 L 5 10 M 10 0 L 10 10',
    'M 0 0 L 10 10 M 10 0 L 0 10',
    'M 2 2 L 8 8 M 8 2 L 2 8',
    'M 10 0 L 0 10 M 10 10 L 0 0',
    'M 0 2 L 10 2 M 0 5 L 10 5 M 0 8 L 10 8',
  ];

  constructor() {}

  getColorPatterns(): any {
    const colorList = [
      '#67B9EE',
      '#026729',
      '#9F6AE1',
      '#FEA26E',
      '#6BA48F',
      '#EA3535',
      '#8D96B7',
      '#ECCA15',
      '#20AA09',
      '#E0C3E4',
    ];
    const colorListLenght = colorList.length;
    const patternsListLenght = this.GENERIC_PATTERNS_1.length;
    const result = [];
  
    for (let index = 0; index < colorListLenght; index++) {
      result.push({
        pattern: {
          path: {
            d: this.GENERIC_PATTERNS_1[index % patternsListLenght],
            strokeWidth: 4,
            stroke: colorList[index],
          },
          width: 10,
          height: 10,
        },
      });
    }
  
    return result;
  }
}

