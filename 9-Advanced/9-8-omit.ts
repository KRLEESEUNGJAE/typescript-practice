{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  type VideoMetadata = Omit<Video, 'url' | 'data' | 'I dont know'>;

  function getVideo(id: string): Video {
    return {
      id,
      title: 'video',
      url: 'https://...',
      data: 'byte-data...',
    };
  }

  function getVideoData(id: string): VideoMetadata {
    return {
      id: id,
      title: 'title',
    };
  }
}
