export declare type PackageVersionHistory = {
    [version: string]: string;
};
export default function getPackageVersionHistory(packageName: string): Promise<PackageVersionHistory>;
