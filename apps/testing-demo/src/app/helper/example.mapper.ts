export interface Example {
  amount: number;
  title: string;
}

export interface ExampleResult {
  label: string;
}

export class ExampleMapper {
  static map({ amount, title }: Example): ExampleResult {
    const label = `${amount} * ${title}`;

    return { label };
  }
}
