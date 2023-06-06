package kr.jj.healingwebservice.domain.item.dao;

import kr.jj.healingwebservice.domain.item.ImageItem;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

/**
 * 이 클래스는 Data Access Object 클래스로 데이터베이스와 상호작용하기 위한 클래스임.
 * 아래 코드 사용 시, List<ImageItem> brazilImages = imageItemDao.getImagesByCountry("국가명"); 의 형식으로 사용하면 됨.
 * 추가적인 오류 처리에 대한 고민은 아래에 적어두기
 */
public class ImageItemDAO {

    private final String url = "jdbc:mysql://localhost:3306/healingweb_db";
    private final String user = "root";
    private final String password = "1208";

    public List<ImageItem> findImagesByCountry(String country) {
        List<ImageItem> images = new ArrayList<>();
        String sql = "SELECT id, imageName, imageUrl FROM " + country + "Image";
        try(Connection connection = DriverManager.getConnection(url, user, password)) {
            PreparedStatement preparedStatement = connection.prepareStatement(sql);
            ResultSet resultSet = preparedStatement.executeQuery();

            while (resultSet.next()) {
                Long id = resultSet.getLong("id");
                String imageName = resultSet.getString("imageName");
                String imageUrl = resultSet.getString("imageUrl");

                ImageItem imageItem = new ImageItem(id, imageName, imageUrl);
                images.add(imageItem);
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
        return images;
    }
}
