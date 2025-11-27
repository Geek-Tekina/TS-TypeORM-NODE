interface FileSource {
    path : string;
    type : "File";
}

interface DBSource {
    connectionURI : string;
    type : "DB";
}

type Source = FileSource | DBSource;

/*
The function isFile is a TypeScript type guard that checks whether a given source object is specifically a FileSource. It takes a parameter source of type Source, which can be either a FileSource or a DBSource. The function returns a boolean value, but more importantly, it uses the source is FileSource return type annotation. This tells TypeScript that if the function returns true, then within that code branch, source can safely be treated as a FileSource.
*/

function isFile(source : Source): source is FileSource {
    return (source.type === "File");
} 

function loadData(source : Source): string {
    if(isFile(source)){ // here boolean value returned tells the ts that source is file
        return source.path;
    }
    // here ts knows it is only DB now
    return source.connectionURI;
}