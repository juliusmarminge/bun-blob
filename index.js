const blob = new Blob(["Hello, World!"], { type: "text/plain" });

console.log("blob name",blob.name);

export class UTFile extends Blob {
    constructor(parts, name, options) {
      const optionsWithDefaults = {
        ...options,
        type: options?.type ?? undefined,
        lastModified: options?.lastModified ?? Date.now(),
      };
      super(parts, optionsWithDefaults);
      this.name = name;
      this.customId = optionsWithDefaults.customId;
      this.lastModified = optionsWithDefaults.lastModified;
    }
  }

  const file = new UTFile(["Hello, World!"], "hello.txt");
  console.log(file);
  console.log(file.name);
  console.log(file.lastModified);
  console.log(file.customId);